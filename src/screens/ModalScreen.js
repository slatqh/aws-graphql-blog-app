import React from 'react';
import { Button } from 'react-native';
import API, { graphqlOperation } from '@aws-amplify/api';
import { createPost } from '../graphql/mutations';
import { CreatePost } from '../components';

export default class ModalScreen extends React.Component {
  state = {
    data: null,
  };

  getBlogPosts = async data => {
    const { title } = data;
    const { id } = this.props.navigation.state.params.id; // get Id from parent screen Posts
    try {
      const newPost = await API.graphql(
        graphqlOperation(createPost, {
          input: {
            title,
            postBlogId: id,
          },
        })
      ).catch(err => console.log('Failure to create a new post', err));
      if (newPost) {
        console.log('post created');
        this.props.navigation.goBack();
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    console.log('ModalScreen', this.props.navigation.state);
    return (
      <CreatePost {...this.props} data={data => this.getBlogPosts(data)} />
    );
  }
}
