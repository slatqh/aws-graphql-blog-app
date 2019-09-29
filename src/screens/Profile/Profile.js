import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native';
import uuid from 'uuid';
import { Auth, Storage } from 'aws-amplify';
import { AvatarUpload } from './AvatarUpload';
import { CustomButton } from '../../components';

class Profile extends Component {
  state = {
    avatar: null,
  };

  componentDidMount() {
    // this.loadUser()
  }

  signOut() {
    const { navigation } = this.props;
    Auth.signOut()
      .then(() => navigation.navigate('Auth'))
      .catch(err => console.log(err));
  }

  render() {
    const { avatar } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView />
        <AvatarUpload />
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
          <Text>First Name</Text>
          <TextInput
            value={this.props.authData.attributes['custom:firstName']}
            style={{ fontSize: 14, letterSpacing: 1 }}
          />
          <Text>Last Name</Text>
          <TextInput
            value={this.props.authData.attributes['custom:lastName']}
          />
          <Text>Email</Text>
          <Text>dimonguitars@gmail.com</Text>
        </View>
        <View style={{ paddingBottom: 40, paddingHorizontal: 10 }}>
          <CustomButton
            style={{ justifyContent: 'flex-end' }}
            gradient
            title="Sign Out"
            onPress={() => this.signOut()}
          />
        </View>
      </View>
    );
  }
}
export default withAuthenticator(Profile);
