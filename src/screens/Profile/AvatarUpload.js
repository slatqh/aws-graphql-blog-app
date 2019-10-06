import React, { Component, useState } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { Storage } from 'aws-amplify';
import ImagePicker from 'react-native-image-picker';

export const AvatarUpload = props => {
  const [avatar, setAvatar] = useState(null);
  function selectPhotoTapped() {
    ImagePicker.showImagePicker(response => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setAvatar(response.uri);
        uploadAvatar();
      }
    });
  }

  async function uploadAvatar() {
    try {
      const response = await fetch(avatar);

      const blob = await response.blob();
      const avatarId = uuid();
      Storage.put(`/avatars/${avatarId}`, blob, {
        contentType: 'image/jpeg',
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View>
      <View
        style={[
          {
            alignItems: 'center',
          },
          props.style,
        ]}
      >
        <TouchableOpacity onPress={() => selectPhotoTapped()}>
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
    </View>
  );
};
