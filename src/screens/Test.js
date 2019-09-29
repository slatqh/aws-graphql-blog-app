import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Storage } from 'aws-amplify';
import { ImageSelect, PostAuthor, Avatar } from '../components';
// import Colors from '../../const/Colors';

export default class TestScreen extends Component {
  state = {
    images: [],
  };

  render() {
    console.log(this.state.images);
    const avatar = false;
    return (
      <View style={{ flex: 1, paddingTop: 100 }}>
        <SafeAreaView />
        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() => console.log('nah')}
        >
          <Image
            style={{ width: 100, height: 100, borderRadius: 50 }}
            source={
              avatar
                ? { uri: avatar }
                : require('../../assets/images/avatar.jpg')
            }
          />
        </TouchableOpacity>
        <Text style={{ alignSelf: 'center', padding: 10, fontSize: 16 }}>
          Vocalist
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <Button onPress={() => console.log('pressed')} title="CONNECT" />
          <Button onPress={() => console.log('pressed')} title="MESSAGE" />
        </View>
        <TouchableOpacity>
          <Text>About me</Text>
        </TouchableOpacity>
        <Text>Some Text</Text>
        <TouchableOpacity>
          <Text>Project</Text>
        </TouchableOpacity>
        <Text>I;m looking for blah blah blah </Text>
        <TextInput placeholder="Write something" />
      </View>
    );
  }
}
const styles = StyleSheet.create({});
