import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import API, { graphqlOperation } from '@aws-amplify/api';
import { AddText } from './InputSection';
import { createPost } from '../graphql/mutations';

export const Posts = ({ posts, blogName, blogId, onPress }) => {
  const [inputValue, setValue] = useState('');

  async function createNewPost() {
    const { data } = await API.graphql(
      graphqlOperation(createPost, {
        input: { title: inputValue, postBlogId: blogId },
      })
    ).catch(err => console.log('SHOW ERROR', err));
    console.log('Created new post for ', data);
  }
  useEffect(() => {}, [posts]);

  return posts.length >= 0 ? (
    <ScrollView style={{}}>
      <Text style={{ alignSelf: 'center', fontSize: 20 }}>
        {blogName || 'Blog'} Posts
      </Text>
      {posts.map(el => (
        <TouchableOpacity style={styles.text} key={el.id} onPress={onPress}>
          <Text>{el.title}</Text>
        </TouchableOpacity>
      )) || <View />}
      <AddText
        placeholder="New posts"
        onChangeText={e => setValue(e)}
        onPress={() => createNewPost()}
      />
    </ScrollView>
  ) : (
    <View />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
  },
  text: {
    fontSize: 14,
    paddingVertical: 4,
    letterSpacing: 1,
  },
});
