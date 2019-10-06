import React, { Component } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native';
import { Auth } from 'aws-amplify';
import API, { graphqlOperation } from '@aws-amplify/api';
import { createUser } from '../../graphql/mutations';

import { AvatarUpload } from './AvatarUpload';
import { CustomButton } from '../../components';

class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <Button
        onPress={() =>
          navigation.navigate('Settings', {
            id: navigation.state.params,
          })
        }
        title="Settings"
      />
    ),
  });

  state = {
    avatar: null,
  };

  componentDidMount() {
    this.loadUser();
  }

  async loadUser() {
    const email = 'dimonguitars@gmail.com';
    const password = 'password';
    const user = await Auth.signIn(email, password);
    const createUserInDb = {
      authID: user.attributes.sub,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      instrument: this.state.instrument,
    };
    try {
      const userGraphQL = await API.graphql(
        graphqlOperation(createUser, { input: createUserInDb })
      ).catch(err =>
        console.log(`Problem with create user graphql model `, err)
      );
      const userID = userGraphQL.data.createUser.id;
      console.log('USERID', userID);
      const updateUser = await Auth.currentAuthenticatedUser({
        bypassCache: false,
      });
      await Auth.updateUserAttributes(updateUser, {
        'custom:authID': userID,
      });
      this.props.navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(this.props);
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView />
        <AvatarUpload />
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
          <Button onPress={() => this.loadUser()} title="CONNECT" />
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
          <Text>{this.props.authData.attributes['email']}</Text>
        </View>
        <View style={{ paddingBottom: 40, paddingHorizontal: 10 }}>
          {/* <CustomButton
            style={{ justifyContent: 'flex-end' }}
            gradient
            title="Sign Out"
            onPress={() => this.signOut()}
          /> */}
        </View>
      </View>
    );
  }
}
export default withAuthenticator(Profile);
