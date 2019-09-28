import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  TextInput,
} from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native';
import uuid from 'uuid';
import { Auth, Storage } from 'aws-amplify';
import ImagePicker from 'react-native-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Profile extends Component {
  state = {
    avatar: null,
  };

  componentDidMount() {
    this.loadUser();
  }

  signOut() {
    const { navigation } = this.props;
    Auth.signOut()
      .then(() => navigation.navigate('Auth'))
      .catch(err => console.log(err));
  }

  loadUser() {
    Auth.currentAuthenticatedUser()
      .then(user => this.setState({ user }))
      .catch(err => this.setState({ user: null }));
  }

  selectPhotoTapped() {
    // const options = {
    //   quality: 1.0,
    //   maxWidth: 500,
    //   maxHeight: 500,
    //   storageOptions: {
    //     skipBackup: true,
    //   },
    // };

    ImagePicker.showImagePicker(response => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // this.setState({ avatar: response.uri });
        console.log(response.uri);
        this.setState({ avatar: response.uri });
        this.uploadAvatar();
      }
    });
  }

  async uploadAvatar() {
    console.log('star uploading');
    try {
      const response = await fetch(this.state.avatar);

      const blob = await response.blob();
      const avatarId = uuid();
      Storage.put(`/avatars/${avatarId}`, blob, {
        contentType: 'image/jpeg',
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { avatar } = this.state;
    console.log(this.props.authData);
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView />
        <View
          style={{
            alignItems: 'center',
          }}
        >
          <TouchableOpacity onPress={() => this.selectPhotoTapped()}>
            <Image
              style={{ width: 100, height: 100, borderRadius: 50 }}
              source={
                avatar
                  ? { uri: avatar }
                  : require('../../../assets/images/avatar.jpg')
              }
            />
          </TouchableOpacity>
        </View>
        <Text>First Name</Text>
        <TextInput value={this.props.authData.attributes['custom:firstName']} />
        <Text>Last Name</Text>
        <TextInput value={this.props.authData.attributes['custom:lastName']} />
        <Text>Email</Text>
        <Text>{this.props.authData.attributes.email}</Text>
        <Button title="Sign Out" onPress={() => this.signOut()} />
      </View>
    );
  }
}
export default withAuthenticator(Profile);
