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
    console.log(this.props.navigation);
    const { navigation } = this.props;
    const { id } = navigation.state.params;

    return (
      <View style={{}}>
        <Post
          options={id}
          action="Load Posts"
          props={this.props}
          queryFields={{ firstField: 'getBlog', secondField: 'posts' }}
        />
      </View>
    );
  }
}
