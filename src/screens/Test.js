import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Storage, Auth } from 'aws-amplify';
import API, { graphqlOperation } from '@aws-amplify/api';
import { createUser } from '../graphql/mutations';
import { ImageSelect, PostAuthor, Avatar } from '../components';
// import Colors from '../../const/Colors';

export default class TestScreen extends Component {
  state = {
    images: [],
  };

  postDataToServer = async () => {
    const newUser = {
      username: 'Dimon',
      lastName: 'Blotnoi',
    };
    try {
      await API.graphql(
        graphqlOperation(createUser, { input: newUser })
        // subscription();
      ).catch(err => console.log(`Problem with create User`, err));
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const avatar = false;
    return (
      <View>
        <SafeAreaView />
        <Button title="create user" onPress={this.postDataToServer} />
      </View>
    );
  }
}
const styles = StyleSheet.create({});
