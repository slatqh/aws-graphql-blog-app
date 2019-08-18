import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { CustomButton } from './Button';
import { CustomTextInput } from './TextInput';

import Colors from '../../const/Colors';

export const CreatePost = props => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  function saveData() {
    const postData = {
      title,
      description,
      message,
    };

    return props.data(postData);
  }
  console.log('CreatePost', props);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingTop: 30 }}>
        <View style={{ alignItems: 'flex-end' }}>
          <Button title="cancel" onPress={() => props.navigation.goBack()} />
        </View>
        <CustomTextInput
          clearButtonMode="while-editing"
          placeholder="Post title"
          icon="email"
          autoFocus
          autoCorrect={false}
          onChangeText={e => setTitle(e)}
        />
        <CustomTextInput
          clearButtonMode="while-editing"
          autoCorrect={false}
          placeholder="Post description"
          icon="email"
          // autoFocus
          onChangeText={e => setDescription(e)}
        />

        <View style={styles.textInput}>
          <TextInput
            placeholder="Type something..."
            multiline
            // color={Colors.lightblack}
            autoCorrect={false}
            style={{ padding: 10, color: Colors.lightblack }}
            onChangeText={e => setMessage(e)}
          />
        </View>
      </View>
      <View style={{ paddingHorizontal: 15, marginBottom: 20 }}>
        <CustomButton title="Save" gradient onPress={() => saveData()} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: {
    margin: 10,
    borderColor: Colors.teal,
    opacity: 0.6,
    borderWidth: 0.5,
    borderRadius: 5,
    height: 200,
    textAlignVertical: 'top',
  },
});
