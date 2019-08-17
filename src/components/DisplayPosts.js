import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Colors from '../../const/Colors';
import { ShowEmtyContent } from './ShowEmtyContent';
import { CardView } from './Card';

const DisplayPosts = props => {
  const { data, noContent } = props;
  if (noContent) {
    return <ShowEmtyContent text="No Posts yet. Create one!" />;
  }
  return (
    <ScrollView>
      {!data ? (
        <ActivityIndicator size="large" color={Colors.blue} />
      ) : (
        data.map(el => (
          <CardView
            onPress={() =>
              props.navigation.navigate('Comments', {
                postId: el.id,
                titleName: el.title,
              })
            }
            title={el.title}
            key={el.id}
          />
        ))
      )}
    </ScrollView>
  );
};

export default DisplayPosts;
