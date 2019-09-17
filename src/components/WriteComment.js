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
        alingItems: 'flex-end',
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          padding: 10,
        }}
      >
        <TextInput
          placeholder="Comment here"
          multiline
          style={{ flex: 0.9 }}
          onChangeText={e => setComment(e)}
          value={comment}
        />
        <TouchableOpacity
          onPress={() => submitComment()}
          style={{ alignSelf: 'flex-end', flex: 0.2, paddingRight: 7 }}
        >
          <Text style={{ fontSize: 14, padding: 5 }}>POST</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
