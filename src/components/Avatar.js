import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Colors from '../../const/Colors';

export const Avatar = ({ children, style, onPress }) => (
  <View style={{ flex: 1 }}>
    <View
      style={{
        alignItems: 'center',
        padding: 10,
        backgroundColor: Colors.milk,
        flexDirection: 'row',
      }}
    >
      <Image
        source={require('../../assets/images/avatar.jpg')}
        style={{ width: 50, height: 50, borderRadius: 25 }}
        resizeMode="center"
      />
      <View style={{ paddingLeft: 10 }}>
        <Text>Model Influencers</Text>
        <Text>Top model lady</Text>
      </View>
      <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }}>
        <Icon size={18} name="dots-three-vertical" />
      </TouchableOpacity>
    </View>
    {/* <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={['#652d91', '#eb008c']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={{
          alignSelf: 'center',
          marginLeft: 70,
          marginTop: -20,

          width: 25,
          height: 25,
          borderRadius: 12.5,
        }}
      >
        <View
          style={{
            color: 'white',
            // marginBottom: 5,
            alignSelf: 'center',
            alignItems: 'center',
            // justifyContent: 'center',
          }}
        >
          <Icon name="ios-add" size={24} color="white" />
        </View>
      </LinearGradient>
    </TouchableOpacity> */}
  </View>
);
