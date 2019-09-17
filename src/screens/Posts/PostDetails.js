import {
  View,
  Text,
  Button,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, { Component } from 'react';
import API, { graphqlOperation } from '@aws-amplify/api';
import Wrapper from '../withContentHOC';
import { PostDetails, WriteComment, SingleComent } from '../../components';
import { createComment } from '../../graphql/mutations';
import CreateContent from '../postToServerHOC';
import { listComments } from '../../graphql/queries';

const postDetails = `
query getPost($id: ID!){
  getPost(id: $id){
    id
    title
    description
    message
    images{
      key
    }
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
const postComments = `
query getPost($id: ID!){
  getPost(id: $id){
    comments{
      items{
        content
        id
      }
    }
  }
}
`;

class PostDetailsScreen extends Component {
  state = {
    isLoading: false,
    data: [],
    comments: [],
    commentLoading: false,
  };

  componentDidMount() {
    this.fetchComments();
  }

  async fetchComments() {
    const { navigation } = this.props;
    const { postId } = navigation.state.params;
    try {
      this.setState({ isLoading: true });
      const { data } = await API.graphql(
        graphqlOperation(postComments, { id: postId })
      );
      if (data) {
        this.setState({ isLoading: false });
        this.setState({ comments: data.getPost.comments.items });
      }
    } catch (error) {
      this.setState({ isLoading: false });
      console.log(error);
    }
  }

  async saveNewComment(comment) {
    const { navigation } = this.props;
    const { postId } = navigation.state.params;
    const newComment = {
      commentPostId: postId,
      content: comment,
    };
    try {
      const { data } = await API.graphql(
        graphqlOperation(createComment, { input: newComment })
      ).catch(err => console.log(`Problem with create comment`, err));
      console.log('Comment submited', data);
      if (data) {
        this.fetchComments();
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { navigation } = this.props;
    const { postId, imageURI } = navigation.state.params;
    return (
      <Wrapper query={postDetails} action="Load Post details" id={postId}>
        {({ data }) => (
          <View style={{ flex: 1 }}>
            <PostDetails data={data} images={imageURI}>
              {this.state.comments.map(el => (
                <SingleComent key={el.id} comment={el.content} />
              ))}
              {this.state.isLoading ? <ActivityIndicator size="large" /> : null}
            </PostDetails>
            <WriteComment onPress={comment => this.saveNewComment(comment)} />
          </View>
        )}
      </Wrapper>
    );
  }
}

export default PostDetailsScreen;
