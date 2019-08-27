import React, { Component } from 'react';
import { View, Button, SafeAreaView } from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native';
import { Auth } from 'aws-amplify';

class Profile extends Component {
  signOut() {
    Auth.signOut(this.props.authData)
      .then(data => console.log(data))
      .catch(err => console.log(err));
    // this.props.navigation.navigate('Login');
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <SafeAreaView>
          <Button title="Sign Out" onPress={() => this.signOut()} />
        </SafeAreaView>
      </View>
    );
  }
}
export default withAuthenticator(Profile);
