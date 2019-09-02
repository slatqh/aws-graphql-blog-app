import React from 'react';
// import { Provider } from 'react-redux';
import Amplify, { Auth } from 'aws-amplify';
import AppNavigator from './src/navigation/AppNavigation';
// import store from './src/Redux/store';
import config from './aws-exports';

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
