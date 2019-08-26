import React from 'react';
import { View } from 'react-native';
import { Authenticator, SignIn } from 'aws-amplify-react-native';
import Login from './Login';

export const Auth = ({ navigation }) => {
  const data = 'data';
  return (
    <Authenticator
      hideDefault
      authState="signIn"
      onStateChange={authState => console.log(authState)}
    >
      {/* <SignIn /> */}
      <Login navigation={navigation} override="SignUp" />
    </Authenticator>
  );
};
