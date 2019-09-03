import React from 'react';
import { ScrollView } from 'react-native';
import { ShowEmtyContent } from './ShowEmtyContent';
import { CardView } from './Card';

const DisplayPosts = ({ data, noContent, navigation }) => {
  console.log('FROM DISPLAY POST', data);
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
          image={el.images}
        />
      ))}
    </ScrollView>
  );
};

export default DisplayPosts;
