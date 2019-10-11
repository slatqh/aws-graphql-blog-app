import React, { useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import DotsIcon from "react-native-vector-icons/dist/Entypo";
import Colors from "../../const/Colors";

export const PostOptions = props => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <TouchableOpacity
      style={{ flex: 1, alignItems: "flex-end" }}
      onPress={() => setShowMenu(!showMenu)}
    >
      {showMenu ? (
        <View
          style={{
            backgroundColor: Colors.blonde,
            borderColor: Colors.lightblack,
            opacity: 0.5,
            borderWidth: 1,
            padding: 10
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: Colors.lightgrey,
              padding: 5
            }}
            onPress={() => props.navigation.navigate("Modal")}
          >
            <Text style={styles.deleteMeneFields}>EDIT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.lightgrey,
              padding: 5
            }}
            onPress={props.delete}
          >
            <Text style={styles.deleteMeneFields}>DELETE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.lightgrey,
              padding: 5
            }}
            onPress={() => setShowMenu(false)}
          >
            <Text style={styles.deleteMeneFields}>CANCEL</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <DotsIcon size={18} name="dots-three-vertical" />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fieldsContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  fields: {
    fontSize: 14,
    color: Colors.black,
    paddingLeft: 5
  },
  container: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    borderColor: Colors.lightgrey,
    borderWidth: 1,
    backgroundColor: Colors.white,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10
  },
  title: {
    fontSize: 14,
    letterSpacing: 1,
    color: Colors.black,
    padding: 10
  },
  commentLikeShare: {
    flex: 1,
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    alignItems: "center"
  },
  deleteMeneFields: {
    fontSize: 12,
    color: Colors.lightblack
  }
});
