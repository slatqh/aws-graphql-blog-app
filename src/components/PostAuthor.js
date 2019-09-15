import React from 'react';
import { View, Text, Image } from 'react-native';
import Colors from '../../const/Colors';

export const PostAuthor = ({ name, status, children }) => (
  <View
    style={{
      alignItems: 'center',
      padding: 10,
      backgroundColor: Colors.milk,
      flexDirection: 'row',
    }}
  >
    <View style={{ flexDirection: 'row' }}>
      <Image
        source={require('../../assets/images/avatar.jpg')}
        style={{ width: 50, height: 50, borderRadius: 25 }}
        resizeMode="center"
      />
      <View style={{ padding: 5 }}>
        <Text>{name}</Text>
        <Text>{status}</Text>
      </View>
    </View>
    {children}
  </View>
);
