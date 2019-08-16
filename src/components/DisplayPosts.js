import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import Colors from '../../const/Colors';
import { ShowEmtyContent } from './ShowEmtyContent';

const DisplayPosts = props => {
  const { data, noContent } = props;
  if (noContent) {
    return <ShowEmtyContent text="No Posts yet. Create one!" />;
  }
  return (
    <View
      style={{
        paddingVertical: 10,
        borderTopWidth: 10,
        borderTopColor: Colors.blue,
      }}
    >
      {data.length ? (
        data.map(el => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Comments', {
                postId: el.id,
                titleName: el.title,
              })
            }
            key={el.id}
            style={{ paddingVertical: 5 }}
          >
            <Text>{el.name || el.title || el.content}</Text>
          </TouchableOpacity>
        ))
      ) : (
        <ActivityIndicator size="large" color={Colors.blue} />
      )}
    </View>
  );
};

export default DisplayPosts;
