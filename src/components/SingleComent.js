import React from 'react';
import { View, Text } from 'react-native';
import Colors from '../../const/Colors';
import { CommentAuthor } from './CommentAuthor';

export const SingleComent = ({ comment }) => (
  <View
    style={{
      marginVertical: 5,
      backgroundColor: Colors.lightgrey,
      height: 50,
      borderRadius: 10,
      marginHorizontal: 10,
      paddingLeft: 10,
      paddingTop: 10,
      justifyContent: 'flex-end',
    }}
  >
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
      <CommentAuthor name="Alex" />
      <Text> {comment} </Text>
    </View>
  </View>
);
