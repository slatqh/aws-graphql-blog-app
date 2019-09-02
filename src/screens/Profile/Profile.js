import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native';
import { Auth, Storage } from 'aws-amplify';

const avatarImage = require('../../../assets/images/avatarDefault.png');

class Profile extends Component {
  constructor(props) {
    super(props);

    this.loadUser = this.loadUser.bind(this);

    // Hub.listen('auth', this, 'navigator'); // Add this component as listener of auth event.

    this.state = { user: null, images: false };
  }

  componentDidMount() {
    this.loadUser();
    this.getImages();
  }

  getImages() {
    Storage.get('yourKeyHere.jpeg')
      .then(result => this.setState({ images: result }))
      .catch(err => console.log(err));
  }

  signOut() {
    Auth.signOut(this.props.authData.pool.clientId)
      .then(data => console.log(data))
      .catch(err => console.log(err));
    // this.props.navigation.navigate('Login');
  }

  loadUser() {
    Auth.currentAuthenticatedUser()
      .then(user => this.setState({ user }))
      .catch(err => this.setState({ user: null }));
  }

  render() {
    console.log(this.state.images);
    return (
      <View>
        <SafeAreaView>
          <Text>Email</Text>
          <Text>{this.props.authData.attributes.email}</Text>
          <Button title="Sign Out" onPress={() => this.signOut()} />
          <Image
            source={{
              uri: this.state.images,
            }}
            style={{
              width: 200,
              height: 300,
              borderWidth: 1,
              borderColor: 'black',
              padding: 20,
            }}
          />
        </SafeAreaView>
      </View>
    );
  }
}
export default withAuthenticator(Profile);
