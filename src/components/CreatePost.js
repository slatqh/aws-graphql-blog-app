import React from 'react';
import { View, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import { CustomButton } from './Button';
import { CustomTextInput } from './TextInput';

import Colors from '../../const/Colors';

export const CreatePost = props => {
  const data = 'data';
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <SafeAreaView />
        <CustomTextInput
          clearButtonMode="while-editing"
          placeholder="Post title"
          icon="email"
          autoFocus
          onChangeText={() => console.log('e')}
        />
        <CustomTextInput
          clearButtonMode="while-editing"
          placeholder="Post description"
          icon="email"
          // autoFocus
          onChangeText={() => console.log('e')}
        />

        <View style={styles.textInput}>
          <TextInput
            placeholder={`${' '} Type something...`}
            multiline
            // onTextChange={e => this.setState({ notes: e })}
          />
        </View>
      </View>
      <View style={{ paddingHorizontal: 15, marginBottom: 20 }}>
        <CustomButton
          title="Save"
          gradient
          onPress={() => props.navigation.goBack()}
        />
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
