import React from 'react';
import { View, TextInput, Button } from 'react-native';
import Colors from '../../const/Colors';

export const WriteComment = props => (
  <View
    style={{
      backgroundColor: Colors.grey,
      height: 50,
      borderRadius: 10,
      marginHorizontal: 10,
      paddingLeft: 10,
      paddingTop: 10,
      alingItems: 'flex-end',
    }}
  >
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
      <TextInput placeholder="Comment here" multiline style={{ flex: 0.9 }} />
      <Button
        title="Post"
        onPress={() => console.log()}
        style={{ alignSelf: 'flex-end', flex: 0.3 }}
      />
    </View>
  </View>
);
