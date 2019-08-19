import React from 'react';
import { ActivityIndicator, StatusBar, View, Linking } from 'react-native';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = () => {
    Linking.getInitialURL()
      .then(url => {
        if (url) {
          console.log(`Initial url is: ${url}`);
        } else {
          console.log('NO URL');
        }
      })
      .catch(err => console.error('An error occurred', err));
    const loogin = false;
    this.props.navigation.navigate(loogin ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    console.log('URL');
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoadingScreen;
