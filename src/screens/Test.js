import React, { Component } from 'react';
import { View, SafeAreaView, Button, StyleSheet } from 'react-native';
import { Storage } from 'aws-amplify';
import { ImageSelect, PostAuthor } from '../components';
// import Colors from '../../const/Colors';

export default class TestScreen extends Component {
  state = {
    images: [],
  };

  // async uploadImage() {
  //   const image = this.state.images.map(el => el.uri);
  //   console.log(image.toString());
  //   try {
  //     const response = await fetch(image);
  //     console.log('response', response);
  //     const blob = await response.blob();
  //     console.log('blob', blob._data.blobId);

  //     Storage.put(`${blob._data.blobId}`, blob, {
  //       contentType: 'image/jpeg',
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  render() {
    console.log(this.state.images);
    return (
      <View style={{ flex: 1, paddingTop: 100 }}>
        <SafeAreaView />
        <PostAuthor />
        {/* <ImageSelect selectImages={images => this.setState({ images })}>
          {() => this.uploadImage()}
        </ImageSelect>
        <Button title="upload" onPress={() => this.uploadImage()} /> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({});
