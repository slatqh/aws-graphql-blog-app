import React from 'react';
import { Provider } from 'react-redux';
import Amplify from 'aws-amplify';
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
