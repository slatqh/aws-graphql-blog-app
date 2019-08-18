import React from 'react';
import { ScrollView } from 'react-native';
import { ShowEmtyContent } from './ShowEmtyContent';
import { CardView } from './Card';

const DisplayPosts = ({ data, noContent, navigation }) => {
  if (noContent) {
    return <ShowEmtyContent text="No Posts yet. Create one!" />;
  }
  return (
    <ScrollView>
      {data.getBlog.posts.items.map(el => (
        <CardView
          onPress={() =>
            navigation.navigate('PostDetails', {
              postId: el.id,
              titleName: el.title,
            })
          }
          title={el.title}
          key={el.id}
        />
      ))}
    </ScrollView>
  );
};

export default DisplayPosts;
