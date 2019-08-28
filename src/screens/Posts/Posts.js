import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { withContent } from '../withContentHOC';
import { DisplayPosts } from '../../components';

const blogQuery = `
    query getBlog($id: ID!){
      getBlog(id: $id){
        id
        name
        posts{
          items{
            title
            id
          }
        }
      }
    }
    `;

const Post = withContent(DisplayPosts, blogQuery);

export default class Posts extends Component {
  static navigationOptions = ({ navigation }) =>
    // const params = navigation.state.params || {};
    ({
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

  render() {
    const { id } = this.props.navigation.state.params;

    return (
      <View style={{}}>
        <Post
          id={id}
          action="Load Posts"
          {...this.props}
          queryFields={{ firstField: 'getBlog', secondField: 'posts' }}
        />
      </View>
    );
  }
}
