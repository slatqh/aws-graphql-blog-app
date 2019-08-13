import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import API, { graphqlOperation } from '@aws-amplify/api';

import { listBlogs, getBlog, listPosts } from '../graphql/queries';

export const MainBlog = () => {
  const [blog, getBlog] = useState([]);
  useEffect(() => {
    async function getData() {
      const { data } = await API.graphql(graphqlOperation(listBlogs));

      getBlog(data.listBlogs.items);
    }
    getData();
  }, []);

  async function getPosts(postId) {
    console.log(postId);
    const Blog = `query GetBlog($${postId}: !ID) {
      getBlog(id: $${postId}) {
        id
        name
        posts {
          items {
            id
            title
          }
          nextToken
        }
      }
    }
    `;

    const data = await API.graphql(graphqlOperation(listPosts)).catch(err =>
      console.log('SHOW ERROR', err)
    );
    console.log(data);
  }
  return (
    <View style={styles.container}>
      {blog.map(el => (
        <TouchableOpacity onPress={() => getPosts(el.id)} key={el.id}>
          <Text>{el.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
