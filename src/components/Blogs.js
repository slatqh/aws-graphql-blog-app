import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Blogs = ({ blogdata, onPress }) => (
  <View>
    {blogdata.map(el => (
      <TouchableOpacity onPress={() => onPress(el.id)} key={el.id}>
        <Text style={styles.text}>{el.name}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
