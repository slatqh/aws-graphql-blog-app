import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import API, { graphqlOperation } from '@aws-amplify/api';

import { Button, Blogs, Posts, AddText } from '../components';
import { listBlogs, getBlog, listPosts } from '../graphql/queries';
import { createBlog, createPost } from '../graphql/mutations';

const blogQuery = `
    query getBlog($id: ID!){
      getBlog(id: $id){
        id
        name
        posts{
          items{
            title
            id
          }
        }
      }
    }
    `;
const createNewPostQuery = `
createPost{
  createPost(input: { title: $id, postBlogId: $id}){
    id
    title
    blog{
      id
      name
    }
  }
  }
`;
export const MainBlog = () => {
  const [blog, getBlog] = useState([]);
  const [input, blogNameInput] = useState('');
  const [blogName, getBlogName] = useState(null);
  const [currentBlogId, setBlogId] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      const { data } = await API.graphql(graphqlOperation(listBlogs));

      getBlog(data.listBlogs.items);
    }
    getData();
  }, []);

  async function getBlogPosts(blogId) {
    const { data } = await API.graphql(
      graphqlOperation(blogQuery, { id: blogId })
    ).catch(err => console.log('SHOW ERROR', err));
    setPosts(data.getBlog.posts.items);
    getBlogName(data.getBlog.name);
    setBlogId(blogId);
  }

  async function createNewBlog() {
    await API.graphql(
      graphqlOperation(createBlog, {
        input: {
          name: input,
        },
      })
    ).catch(err => console.log('Create blog', err));
  }
  async function createNewPost(postName) {
    console.log(postName);
    const { data } = await API.graphql(
      graphqlOperation(createPost, {
        input: { title: postName, postBlogId: currentBlogId },
      })
    ).catch(err => console.log('SHOW ERROR', err));
    console.log('Created new post for ', data);
  }
  return (
    <View style={styles.container}>
      <Blogs onPress={postId => getBlogPosts(postId)} blogdata={blog} />
      <Posts
        posts={posts}
        blogName={blogName}
        blogId={currentBlogId}
        createNewPost={e => createNewPost(e)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  createBlog: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
