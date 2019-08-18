import React from 'react';
import { View, Text } from 'react-native';
import Colors from '../../const/Colors';

export const SingleComent = ({ comment }) => (
  <View
    style={{
      marginVertical: 5,
      backgroundColor: Colors.grey,
      height: 50,
      borderRadius: 10,
      marginHorizontal: 10,
      paddingLeft: 10,
      paddingTop: 10,
      justifyContent: 'flex-end',
    }}
  >
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
      <Text> {comment} </Text>
    </View>
  </View>
);
