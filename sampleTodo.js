import React, { Fragment, useReducer, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  Text,
  StatusBar,
} from 'react-native';

import API, { graphqlOperation } from '@aws-amplify/api';
import PubSub from '@aws-amplify/pubsub';
import { createTodo, createZipCodes } from './src/graphql/mutations';
import { listZipCodes } from './src/graphql/queries';

import config from './aws-exports';

API.configure(config); // Configure Amplify
PubSub.configure(config);

// async function createNewTodo() {
//   const todo = { name: 'Use AppSync', description: 'Realtime and Offline' };
//   await API.graphql(graphqlOperation(createTodo, { input: todo }));
// }
async function createnewZipCode() {
  const zipcode = {
    id: 1224 - 123112 - 12112 - 1212,
    title: '11234',
    city: 'Brooklyn',
  };
  await API.graphqlOperation(createZipCodes, { input: zipcode });
}
const initialState = { todos: [] };
const reducer = (state, action) => {
  switch (action.type) {
    case 'QUERY':
      return { ...state, todos: action.todos };
    case 'SUBSCRIPTION':
      return { ...state, todos: [...state.todos, action.todo] };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const zipCodes = await API.graphql(graphqlOperation(listZipCodes));
    dispatch({ type: 'QUERY', todos: zipCodes.data.listZipCodes.items });
  }

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
      <View style={styles.container}>
        <Button onPress={createnewZipCode} title="Create zipcode" />
        {state.todos.map((todo, i) => (
          <Text key={todo.id}>
            {todo.city} : {todo.zipcode}
          </Text>
        ))}
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default App;
