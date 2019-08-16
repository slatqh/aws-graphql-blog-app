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
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerRight: (
        <Button onPress={() => navigation.navigate('Modal')} title="Info" />
      ),
      /* the rest of this config is unchanged */
    };
  };

  render() {
    console.log(this.props.navigation);
    const { navigation } = this.props;
    const { id } = navigation.state.params;

    return (
      <View>
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
