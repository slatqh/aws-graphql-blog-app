import React, { Component } from 'react';
import { View, SafeAreaView, Button, StyleSheet } from 'react-native';
import { Storage } from 'aws-amplify';
import { ImageSelect } from '../components';
// import Colors from '../../const/Colors';

export default class TestScreen extends Component {
  state = {
    images: [],
  };

  async uploadImage() {
    const image = this.state.images.map(el => el.uri);
    console.log(image.toString());
    try {
      const response = await fetch(image.toString());

      const blob = await response.blob();

      Storage.put('yourKeyHere.jpeg', blob, {
        contentType: 'image/jpeg',
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    console.log(this.state.images);
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView />
        <ImageSelect selectImages={images => this.setState({ images })}>
          {() => this.uploadImage()}
        </ImageSelect>
        <Button title="upload" onPress={() => this.uploadImage} />
      </View>
    );
  }
}
const styles = StyleSheet.create({});
