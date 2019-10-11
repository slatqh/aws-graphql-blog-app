import React from "react";
import { ScrollView } from "react-native";
import { CardView, ShowEmtyContent } from "../../../components";

const Post = ({ data, noContent, navigation }) => {
  if (noContent) {
    return <ShowEmtyContent text="No Posts yet. Create one!" />;
  }
  return (
    <ScrollView>
      {data.getBlog.posts.items.map(el => (
        <CardView
          onPress={() =>
            navigation.navigate("PostDetails", {
              postId: el.id,
              titleName: el.title
            })
          }
          title={el.title}
          key={el.id}
          image={el.images}
        />
      ))}
    </ScrollView>
  );
};

export default Post;
