import React from 'react';
import { Provider } from 'react-redux';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import Login from './src/screens/Auth/Login';
import AppNavigator from './src/navigation/AppNavigation';
import store from './src/Redux/store';
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

export default App;
