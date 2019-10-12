import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Colors from '../../../../const/Colors';

export const ShowPost = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View
      style={{
        height: 47,
        borderBottomColor: Colors.grey,
        borderBottomWidth: 0.3,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontFamily: 'PlayfairDisplay-Regular',
          fontSize: 18,
        }}
      >
        {props.title}
      </Text>
      <View style={{ alignItems: 'flex-end', flex: 1 }}>
        <Text
          style={{
            fontFamily: 'PlayfairDisplay-Regular',
            fontSize: 16,
            // alignSelf: 'flex-end',
            color: Colors.black,
          }}
        >
          01/14/19
        </Text>
        <Text
          style={{
            fontFamily: 'PlayfairDisplay-Regular',
            fontSize: 14,
            // alignSelf: 'flex-end',
            color: Colors.black,
          }}
        >
          Brooklyn
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);
