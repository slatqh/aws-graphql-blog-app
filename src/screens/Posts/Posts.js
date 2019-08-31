import React, { Component } from 'react';
import { View, ScrollView, Button, Text } from 'react-native';
import Wrapper from '../withContentHOC';
import { CardView } from '../../components';

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
                key={el.id}
              />
            ))
          }
        </Wrapper>
      </ScrollView>
    );
  }
}
