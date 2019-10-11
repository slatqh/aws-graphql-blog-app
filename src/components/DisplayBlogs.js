import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { ShowEmtyContent } from "./ShowEmtyContent";
import Colors from "../../const/Colors";

const DisplayBlogs = ({ data, noContent, navigation }) => {
  const { listBlogs } = data;
  // if (noContent) {
  //   return <ShowEmtyContent text="No Blog yet. Create one!" />;
  // }
  return (
    <View
      style={{
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderTopWidth: 10,
        borderTopColor: Colors.teal
      }}
    >
      {data.listBlogs.items.map(el => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Posts", {
              id: el.id,
              titleName: el.name
            })
          }
          key={el.id}
          style={{ paddingVertical: 5 }}
        >
          <Text>{el.name || el.title || el.content}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default DisplayBlogs;
