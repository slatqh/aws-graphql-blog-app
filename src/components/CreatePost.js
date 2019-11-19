import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Button as CustomBotton,
} from 'react-native';
import Button from './Button';
import { CustomTextInput } from './TextInput';
import ImageSelect from './ImagePicker';

import Colors from '../../const/Colors';

export const CreatePost = props => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [images, setImages] = useState([]);

  function saveData() {
    const postData = {
      title,
      description,
      message,
      images,
    };

    return props.data(postData);
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'flex-end', marginTop: 40 }}>
        <CustomBotton
          title="Cancel"
          onPress={() => props.navigation.goBack()}
        />
      </View>
      <View style={{ flex: 1, paddingTop: 30, padding: 10 }}>
        <CustomTextInput
          clearButtonMode="while-editing"
          placeholder="Post title"
          autoFocus
          autoCorrect={false}
          onChangeText={e => setTitle(e)}
        />
        <CustomTextInput
          clearButtonMode="while-editing"
          autoCorrect={false}
          placeholder="Post description"
          onChangeText={e => setDescription(e)}
        />

        <View style={styles.textInput}>
          <TextInput
            placeholder="Type something..."
            multiline
            color={Colors.teal}
            autoCorrect={false}
            style={{
              padding: 10,
              color: Colors.lightblack,
              flex: 1,
              height: 150,
            }}
            onChangeText={e => setMessage(e)}
          />
        </View>
        <ImageSelect selectImages={img => setImages(img)} />
      </View>
      <View style={{ paddingHorizontal: 15, marginBottom: 20 }}>
        <Button text="Save" type="noBorder" onPress={() => saveData()} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    marginTop: 20,
    // borderColor: Colors.teal,
    opacity: 0.6,
    borderWidth: 0.5,
    borderRadius: 5,
    // height: 200,
    // textAlignVertical: 'top',
  },
});
