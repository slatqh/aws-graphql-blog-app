import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Comments = ({ data, onPress }) => (
  <View>
    {data.map(el => (
      <TouchableOpacity key={el.id}>
        <Text style={styles.text}>{el.context}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
