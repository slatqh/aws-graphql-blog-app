import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const ShowEmtyContent = props => {
  const { text } = props;
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
  },
});
