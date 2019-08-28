import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { withContent } from '../withContentHOC';
import { PostDetails, WriteComment } from '../../components';
import { createComment } from '../../graphql/mutations';
import { createContent } from '../postToServerHOC';

const PostComment = createContent(WriteComment, createComment);

const postsComments = `
    query getPost($id: ID!){
      getPost(id: $id){
        id
        title
        description
        message
        comments{
          items{
            content
            id
            post {
              id
              title
            }
          }
        }
      }
    }
    `;

const ShowPostDetails = withContent(PostDetails, postsComments);
class PostDetailsScreen extends Component {
  render() {
    const { navigation } = this.props;
    const { postId } = navigation.state.params;
    return (
      <View style={{ flex: 1 }}>
        <ShowPostDetails id={postId} action="Load Comments">
          <PostComment id={postId} />
        </ShowPostDetails>
      </View>
    );
  }
}

export default PostDetailsScreen;
