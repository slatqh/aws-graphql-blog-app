import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../const/Colors';

export const Avatar = ({ children, style, onPress }) => (
  <View>
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: Colors.lightgrey,
        width: 100,
        height: 100,
        borderRadius: 50,
      }}
    >
      <Image
        source={require('../../assets/images/default_avatar.jpeg')}
        style={{ width: 70, height: 70, tintColor: Colors.grey }}
        resizeMode="center"
      />
    </View>
    <TouchableOpacity onPress={onPress}>
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
    </TouchableOpacity>
  </View>
);
