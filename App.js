import React from 'react';
import PubSub from '@aws-amplify/pubsub';
import { Provider } from 'react-redux';
import API from '@aws-amplify/api';
import Amplify, { Auth } from 'aws-amplify';
import AppNavigator from './src/navigation/AppNavigation';
import store from './src/Redux/store';
import { withAuthenticator } from 'aws-amplify-react-native';
import config from './aws-exports';

console.disableYellowBox = true;

Amplify.configure(config);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default withAuthenticator(App);
