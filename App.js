import React, { Fragment } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import API from '@aws-amplify/api';
import PubSub from '@aws-amplify/pubsub';
import config from './aws-exports';
import { MainBlog } from './src/screens/Main';

console.disableYellowBox = true;

API.configure(config);
PubSub.configure(config);

const App = () => (
  <Fragment>
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
    <MainBlog />
  </Fragment>
);

export default App;
