import React from 'react';
import { useScreens } from 'react-native-screens';

import Amplify, { Auth } from 'aws-amplify';
import AppNavigator from './src/navigation/AppNavigation';
// import store from './src/Redux/store';
import config from './aws-exports';

useScreens();
console.disableYellowBox = true;

Amplify.configure(config);

class App extends React.Component {
  render() {
    return (
      // <ApolloProvider>
      <AppNavigator />
      // </ApolloProvider>
    );
  }
}

export default App;
