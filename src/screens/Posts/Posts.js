import React, { Component } from 'react';
import { View, ScrollView, Button, Text } from 'react-native';
import API, { graphqlOperation } from '@aws-amplify/api';
import Wrapper from '../withContentHOC';
import { CardView } from '../../components';
import { deletePost } from '../../graphql/mutations';

const blogQuery = `
    query getBlog($id: ID!){
      getBlog(id: $id){
        id
        name
        posts{
          items{
            title
            id
            images{
              key
            }
            description
          }
        }
      }
    }
    `;

export default class Posts extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <Button
        onPress={() =>
          navigation.navigate('Modal', {
            id: navigation.state.params, // passing current post/blog id to modal screen
          })
        }
        title="New"
      />
    ),
  });

  state = {
    loading: false,
    error: false,
  };

  async _deletePost(id) {
    console.log(id);
    try {
      this.setState({ loading: true });
      await API.graphql(graphqlOperation(deletePost, { input: { id } })).catch(
        err => console.log(`Problem with deleting POST`, err)
      );
    } catch (error) {
      console.log(error);
      this.setState({ error: true, loading: false });
    }
  }

  render() {
    const { id } = this.props.navigation.state.params;

    return (
      <ScrollView style={{}}>
        <Wrapper query={blogQuery} id={id}>
          {({ data }) =>
            data.getBlog.posts.items.map(el => (
              <CardView
                key={el.id}
                onPress={() =>
                  this.props.navigation.navigate('PostDetails', {
                    postId: el.id,
                    titleName: el.title,
                  })
                }
                title={el.title}
                postImage={el.images}
                deletePost={() => this._deletePost(el.id)}
              />
            ))
          }
        </Wrapper>
      </ScrollView>
    );
  }
}
