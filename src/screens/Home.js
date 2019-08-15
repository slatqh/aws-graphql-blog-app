import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { getInput } from './actions';
import { listBlogs, getBlog, listPosts } from '../graphql/queries';
import { withSubscription } from './wrapperHOC';
import DisplayContent from '../components/Display';

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
const BlogContent = withSubscription(DisplayContent, listBlogs, blogQuery);
const PostsContent = withSubscription(DisplayContent);
const CommentContent = withSubscription(DisplayContent);

class Home extends Component {
  render() {
    console.log('HOME', this.props.postId);
    return (
      <View>
        <BlogContent />
        {/* <PostsContent /> */}
        {/* <CommentContent /> */}
      </View>
    );
  }
}
const mapStateToProps = blog => {
  const { postId } = blog;
  return { postId };
};
export default connect(
  mapStateToProps,
  { getInput }
)(Home);
