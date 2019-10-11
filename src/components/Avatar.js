import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Colors from "../../const/Colors";

export const Avatar = ({ onPress, name, status }) => (
  <View style={{}}>
    <View
      style={{
        alignItems: "center",
        backgroundColor: Colors.milk,
        flexDirection: "row"
      }}
    >
      <Image
        source={require("../../assets/images/avatar.jpg")}
        style={{ width: 50, height: 50, borderRadius: 25 }}
        resizeMode="center"
      />
      <View style={{ paddingLeft: 10 }}>
        <Text>{name}</Text>
        <Text>{status}</Text>
      </View>
      <TouchableOpacity style={{ flex: 1, alignItems: "flex-end" }}>
        <Icon size={18} name="dots-three-vertical" />
      </TouchableOpacity>
    </View>
  </View>
);
