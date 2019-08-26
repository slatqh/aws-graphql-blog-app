import React, { Component } from 'react';
import { View, Button, SafeAreaView } from 'react-native';
import { Auth } from 'aws-amplify';

export default class Profile extends Component {
  signOut() {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
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
