import React, { Component } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native';
import { Auth } from 'aws-amplify';

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

  async updateAtt() {
    const user = await Auth.currentAuthenticatedUser({ bypassCache: false });
    console.log(user);
  }

  render() {
    const { avatar } = this.state;
    console.log(this.props);
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView />
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
                : require('../../../assets/images/avatar.jpg')
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
        <Button title="update attributes" onPress={() => this.updateAtt()} />
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
