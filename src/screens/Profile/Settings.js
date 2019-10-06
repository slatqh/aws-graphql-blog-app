import React, { Component } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import { Auth } from 'aws-amplify';
import Wrapper from '../withContentHOC';

export default class Settings extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <Button
        onPress={() =>
          Auth.signOut()
            .then(() => navigation.navigate('Auth'))
            .catch(err => console.log(err))
        }
        title="sign out"
      />
    ),
  });

  render() {
    return (
      <ScrollView>
        <Wrapper>{({ data }) => <Text>User Data</Text>}</Wrapper>
      </ScrollView>
    );
  }
}
