import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Button = ({ onPress, title }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'dimgrey',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
  text: {
    fontSize: 12,
    color: 'white',
    padding: 3,
  },
});
