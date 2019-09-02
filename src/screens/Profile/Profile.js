import React, { Component } from 'react';
import { Text, View, Button, SafeAreaView } from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native';
import { Auth } from 'aws-amplify';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.loadUser = this.loadUser.bind(this);

    // Hub.listen('auth', this, 'navigator'); // Add this component as listener of auth event.

    this.state = { user: null };
  }

  componentDidMount() {
    this.loadUser();
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
    console.log(this.user);
    return (
      <View>
        <SafeAreaView>
          <Text>Email</Text>
          <Text>{this.props.authData.attributes.email}</Text>
          <Button title="Sign Out" onPress={() => this.signOut()} />
        </SafeAreaView>
      </View>
    );
  }
}
export default withAuthenticator(Profile);
