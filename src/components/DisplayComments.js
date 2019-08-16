import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import Colors from '../../const/Colors';
import { ShowEmtyContent } from './ShowEmtyContent';

const DisplayComments = props => {
  const { data, noContent } = props;
  if (noContent) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <ShowEmtyContent text="No Comments yet. Create one!" />
      </View>
    );
  }
  return (
    <View
      style={{
        paddingVertical: 10,
        borderTopWidth: 10,
        borderTopColor: Colors.teal,
      }}
    >
      {data.length ? (
        data.map(el => (
          <TouchableOpacity
            // onPress={() => props.navigation.navigate('Posts', { id: el.id })}
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

export default DisplayComments;
