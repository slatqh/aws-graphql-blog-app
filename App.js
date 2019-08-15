import React from 'react';
import { SafeAreaView, StatusBar, Text, View, Button } from 'react-native';
import API from '@aws-amplify/api';
import PubSub from '@aws-amplify/pubsub';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import config from './aws-exports';
import reducers from './src/Redux/reducers';
import Home from './src/screens/Home';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

console.disableYellowBox = true;

API.configure(config);
PubSub.configure(config);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <View
          style={{
            backgroundColor: 'cadetblue',
            widht: '100%',
            height: 40,
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              padding: 10,
              alignSelf: 'center',
            }}
          >
            {' '}
            My Blog
          </Text>
        </View>
        <Home />
      </Provider>
    );
  }
}

export default App;
