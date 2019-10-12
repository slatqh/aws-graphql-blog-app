import React, { Component } from 'react';
import { View, ScrollView, Button, Text } from 'react-native';
import API, { graphqlOperation } from '@aws-amplify/api';
import Wrapper from '../withContentHOC';
import { ShowPost } from './components/Posts';
import { deletePost } from '../../graphql/mutations';
import Colors from '../../../const/Colors';

const blogQuery = `
    query getBlog($id: ID!){
      getBlog(id: $id){
        id
        name
        posts{
          items{
            title
            id
            postAuthor{
              username
            }
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

  async _deletePost(id) {
    try {
      await API.graphql(graphqlOperation(deletePost, { input: { id } })).catch(
        err => console.log(`Problem with deleting POST`, err)
      );
    } catch (error) {
      throw new Error(error);
    }
  }

  render() {
    const { id } = this.props.navigation.state.params;

    return (
      <ScrollView contentContainerStyle={{ flex: 1, paddingHorizontal: 10 }}>
        <Wrapper query={blogQuery} id={id} action="get posts">
          {({ data }) =>
            data.getBlog.posts.items.map(el => (
              <ShowPost
                title={el.title}
                onPress={imageURI =>
                  this.props.navigation.navigate('PostDetails', {
                    postId: el.id,
                    titleName: el.title,
                    imageURI,
                    username: el.postAuthor,
                  })
                }
              />
              // <Text>{el.title}</Text>
            ))
          }
        </Wrapper>
      </ScrollView>
    );
  }
}
