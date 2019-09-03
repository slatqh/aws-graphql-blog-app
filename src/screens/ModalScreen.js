import React from 'react';
import { Button } from 'react-native';
import API, { graphqlOperation } from '@aws-amplify/api';
import { Storage } from 'aws-amplify';
import uuid from 'uuid/v4';
import { withAuthenticator } from 'aws-amplify-react-native';
import { createPost } from '../graphql/mutations';
import { CreatePost, ImageSelect } from '../components';

class ModalScreen extends React.Component {
  state = {
    data: null,
  };

  getBlogPosts = async data => {
    const { title, description, message, images } = data;
    const { id } = this.props.navigation.state.params.id; // get Id from parent screen Posts
    const image = images.map(el => el.uri);
    console.log(image);
    const response = await fetch(image);
    console.log('response', response);
    const blob = await response.blob();
    const key = `${blob._data.blobId}`;
    console.log('blob', blob._data.blobId);
    const fileToUpload = {
      bucket: 'blogappa3f6cac5608b4c6fbabd4e15fbe2d03e-react',
      key,
      region: 'us-east-1',
    };
    try {
      await Storage.put(`${key}`, blob, {
        contentType: 'image/jpeg',
      });
      const newPost = await API.graphql(
        graphqlOperation(createPost, {
          input: {
            title,
            description,
            message,
            images: fileToUpload,
            createdAt: new Date(),
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
    return (
      <CreatePost {...this.props} data={data => this.getBlogPosts(data)} />
    );
  }
}
export default withAuthenticator(ModalScreen);
