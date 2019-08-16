import React, { Component } from 'react';
import { View } from 'react-native';
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
  render() {
    const { navigation } = this.props;
    const { id, titleName } = navigation.state.params;
    // const { titleName } = this.props.navigation.state.params;
    console.log(titleName);

    return (
      <View>
        <Post options={id} action="Load Posts" props={this.props} />
      </View>
    );
  }
}
