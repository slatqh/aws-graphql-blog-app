import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { CustomButton } from './Button';
import Colors from '../../const/Colors';

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default class ImageSelect extends Component {
  state = {
    images: [],
  };

  // /const [image, selectImage] = useState([])
  // console.log('Image',image)
  selectPhotoTapped() {
    // const options = {
    //   quality: 1.0,
    //   maxWidth: 500,
    //   maxHeight: 500,
    //   storageOptions: {
    //     skipBackup: true,
    //   },
    // };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        this.setState({
          images: [...this.state.images, source],
        });
        return this.props.selectImages(this.state.images);
      }
    });
  }

  removeImage(id) {
    this.setState(state => {
      const deleted = state.images.filter(el => el !== id);
      return {
        images: deleted,
      };
    });
  }

  render() {
    const { images } = this.state;
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={
            images.length == 0 ? styles.emptyContainer : styles.avatarContainer
          }
        >
          {images.length == 0 ? (
            <TouchableOpacity
              onPress={this.selectPhotoTapped.bind(this)}
              style={{
                alignItems: 'center',
              }}
            >
              <Image
                style={{ width: 50, height: 50 }}
                source={require('../../assets/images/imageselect.png')}
              />
              <Text style={{ paddingTop: 5 }}>Select a Photo</Text>
            </TouchableOpacity>
          ) : (
            images.map(image => (
              <TouchableOpacity
                onPress={() => this.removeImage(image)}
                key={image.uri}
              >
                <Image style={styles.avatar} source={{ uri: image.uri }} />
              </TouchableOpacity>
            ))
          )}
        </View>
        {images.length == 0 ? null : (
          <View style={{ flex: 1, padding: 15, justifyContent: 'flex-end' }}>
            <CustomButton
              title="upload images"
              color={Colors.teal}
              onPress={this.props.children}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  avatarContainer: {
    borderColor: Colors.lightgrey,
    borderWidth: 1 / PixelRatio.get(),
    borderRadius: 5,

    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 4,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 10,
    // borderColor: Colors.teal,
    // borderWidth: 1,
  },
  avatar: {
    margin: 10,
    width: 50,
    height: 50,
  },
});
