import React, { Component } from 'react';
import { Text, View, Button, ScrollView, TextInput } from 'react-native';
import { Auth } from 'aws-amplify';
import { getUser } from '../../graphql/queries';
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

  state = {
    user: {},
  };

  render() {
    console.log(this.state.user);
    return (
      <ScrollView>
        <Wrapper
          query={getUser}
          id="d9c69907-59af-4897-b91b-4aaa529ce8d5"
          action="get user data"
        >
          {({ data }) => {
            console.log(data.getUser);
            return <Text>User Data</Text>;
          }}
        </Wrapper>
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
      </ScrollView>
    );
  }
}
