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
import Colors from '../../const/Colors';
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
      <View style={{}}>
        <SafeAreaView />
        <View
          style={{
            height: 47,
            width: '100%',
            borderBottomColor: Colors.grey,
            borderBottomWidth: 0.3,
            justifyContent: 'center',
            flexDirection: 'row',
          }}
        >
          <Text style={{ fontFamily: 'PlayfairDisplay-Regular', fontSize: 18 }}>
            Looking for guitar
          </Text>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Text
              style={{
                fontFamily: 'PlayfairDisplay-Regular',
                fontSize: 14,
                // alignSelf: 'flex-end',
                color: Colors.black,
                paddingBottom: 5,
              }}
            >
              01/14/19
            </Text>
            <Text
              style={{
                fontFamily: 'PlayfairDisplay-Regular',
                fontSize: 14,
                // alignSelf: 'flex-end',
                color: Colors.black,
              }}
            >
              Brooklyn
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({});
