import React from "react";
import { View, ActivityIndicator } from "react-native";

export const Loading = () => (
  <View style={{ justifyContent: "center", alignItems: "center" }}>
    <ActivityIndicator size="large" />
  </View>
);
