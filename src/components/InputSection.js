import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Button } from "./Button";
import Colors from "../../const/Colors";

export const AddText = ({ onChangeText, onPress, placeholder }) => {
  const [toggle, selectToggle] = useState(true);
  return toggle ? (
    <TouchableOpacity onPress={() => selectToggle(false)} style={styles.add}>
      <Text style={{ fontSize: 18, color: "white", padding: 3 }}>add</Text>
    </TouchableOpacity>
  ) : (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={e => onChangeText(e)}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Button title="Create" onPress={onPress} />
        <Button title="X" onPress={() => selectToggle(true)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: Colors.blue,
    padding: 5,
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 10
    // flexDirection: 'row',
  },
  add: {
    alignSelf: "flex-end",
    backgroundColor: Colors.grey,
    alignItems: "center"
  }
});
