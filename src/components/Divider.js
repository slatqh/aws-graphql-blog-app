import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../../const/Colors';

export const Divider = () => <View style={styles.wrapper} />;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 1,
    opacity: 0.5,
    backgroundColor: Colors.divider,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
