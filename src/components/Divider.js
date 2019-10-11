import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../../const/Colors";

export const Divider = ({ style }) => <View style={[styles.wrapper, style]} />;

const styles = StyleSheet.create({
  wrapper: {
    // width: '100%',
    height: 1,
    opacity: 0.5,
    backgroundColor: Colors.divider
  }
});
