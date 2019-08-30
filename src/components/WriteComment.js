import { View, TextInput, Button, TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react';
import Colors from '../../const/Colors';

export const WriteComment = ({ onPress }) => {
  const [comment, setComment] = useState(null);

  function submitComment() {
    onPress(comment);
    setComment('');
  }
  return (
    <View
      style={{
        backgroundColor: Colors.milk,
        height: 50,
        borderRadius: 10,
        marginHorizontal: 10,
        paddingLeft: 10,
        paddingTop: 10,
        alingItems: 'flex-end',
      }}
    >
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          placeholder="Comment here"
          multiline
          style={{ flex: 0.9 }}
          onChangeText={e => setComment(e)}
          value={comment}
        />
        <TouchableOpacity
          onPress={() => submitComment()}
          style={{ alignSelf: 'flex-end', flex: 0.3 }}
        >
          <Text>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
