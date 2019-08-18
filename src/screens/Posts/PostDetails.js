import React, { Component } from 'react';
import { View } from 'react-native';
import { withContent } from '../withContentHOC';
import { PostDetails } from '../../components';

const postsComments = `
    query getPost($id: ID!){
      getPost(id: $id){
        id
        title
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
    const { postId, titleName } = navigation.state.params;
    console.log('postId', postId);
    console.log('Comments', titleName);
    return (
      <View style={{ flex: 1 }}>
        <ShowPostDetails
          id={postId}
          action="Load Comments"
          queryFields={{ firstField: 'getPost', secondField: 'comments' }}
        />
      </View>
    );
  }
}

export default PostDetailsScreen;
