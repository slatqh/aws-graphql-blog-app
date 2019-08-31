import React, { Component } from 'react';
import { View } from 'react-native';
import { withContent } from '../withContentHOC';
import { DisplayComments } from '../../components';

const postsComments = `
    query getPost($id: ID!){
      getPost(id: $id){
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

// const ShowComments = withContent(DisplayComments, postsComments);

class Comments extends Component {
  render() {
    const { navigation } = this.props;
    const { postId, titleName } = navigation.state.params;
    console.log('postId', postId);
    console.log('Comments', titleName);
    return (
      <View style={{ flex: 1 }}>
        {/* <ShowComments
          id={postId}
          action="Load Comments"
          queryFields={{ firstField: 'getPost', secondField: 'comments' }}
        /> */}
      </View>
    );
  }
}

export default Comments;
