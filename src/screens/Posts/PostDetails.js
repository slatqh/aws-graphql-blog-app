import { View, Text, Button, ActivityIndicator, TextInput } from 'react-native';
import React, { Component } from 'react';
import { withContent } from '../withContentHOC';
import { PostDetails, WriteComment } from '../../components';
import { createComment } from '../../graphql/mutations';
import CreateContent from '../postToServerHOC';

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
  state = {
    isLoading: false,
    comment: 'No Comment',
  };

  // shouldComponentUpdate(prevState, nextState) {
  //   console.log(prevState, nextState);
  //   if (prevState.comment !== nextState.comment) {
  //     return false;
  //   }
  // }

  reloadComponent = reload => {
    console.log(reload);
    reload;
  };

  render() {
    // console.log('Post details component isLoading', this.state.comment);
    const { navigation } = this.props;
    const { isLoading } = this.state;
    const { postId } = navigation.state.params;
    return (
      <View style={{ flex: 1 }}>
        <ShowPostDetails
          id={postId}
          action="Load Comments"
          comment={this.state.comment}
          reload={reload => this.reloadComponent(reload)}
        />
        <CreateContent
          id={postId}
          callback={this.reloadComponent()}
          // commentSubmited={() => this.setState({ isLoading: true })}
        >
          {(postDataToServer, loading) => (
            <WriteComment
              onPress={comment => {
                postDataToServer(comment, postId, createComment);
              }}
            />
          )}
        </CreateContent>
      </View>
    );
  }
}

export default PostDetailsScreen;
