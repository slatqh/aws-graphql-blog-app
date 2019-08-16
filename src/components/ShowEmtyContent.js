import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ShowEmtyContent = props => {
  const { text } = props;
  return (
    <View
      style={{
        alignContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.text}>Where is styles?????</Text>
    </View>
  );
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
