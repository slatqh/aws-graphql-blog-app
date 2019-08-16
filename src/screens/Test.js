import React, { Component } from 'react';
import { Text, TextInput, View, SafeAreaView, StyleSheet } from 'react-native';
import { CustomTextInput, CustomButton } from '../components';
import Colors from '../../const/Colors';

export default class TestScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView />
        <View style={{ flex: 1 }}>
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
              onTextChange={e => this.setState({ notes: e })}
            />
          </View>
        </View>
        <View style={{ paddingHorizontal: 15, marginBottom: 20 }}>
          <CustomButton title="Save" gradient />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  // divider: {
  //     width: '100%',
  //     borderTopWidth: 2,
  //     borderTopColor: Colors.grey,
  //     marginTop: 10,
  // },
  // wraper: {
  //     flex: 1,
  //     marginTop: 10,
  //     paddingHorizontal: 15,
  // },
  // modal: {
  //     flex: 1,
  //     backgroundColor: 'white',
  //     paddingHorizontal: 5,
  // },
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
