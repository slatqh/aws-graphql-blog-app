import React, { Component } from 'react';
import { View, ScrollView, Button, Text } from 'react-native';
import API, { graphqlOperation } from '@aws-amplify/api';
import Wrapper from '../withContentHOC';
import { CardView } from '../../components';
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
      <ScrollView contentContainerStyle={{ backgroundColor: Colors.blonde }}>
        <Wrapper query={blogQuery} id={id} action="get posts">
          {({ data }) =>
            data.getBlog.posts.items.map(el => (
              <CardView
                key={el.id}
                user={el.postAuthor}
                onPress={imageURI =>
                  this.props.navigation.navigate('PostDetails', {
                    postId: el.id,
                    titleName: el.title,
                    imageURI,
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
