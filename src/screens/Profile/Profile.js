import React, { Component } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native';
import { Auth } from 'aws-amplify';
import API, { graphqlOperation } from '@aws-amplify/api';
import { getUser } from '../../graphql/queries';
import { AvatarUpload } from './AvatarUpload';
import { CustomButton } from '../../components';

class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <Button
        onPress={() =>
          navigation.navigate('Settings', {
            id: navigation.state.params,
          })
        }
        title="Settings"
      />
    ),
  });

  state = {
    avatar: null,
    user: {},
    wallPostMessage: '',
  };

  componentDidMount() {
    this.loadUser();
  }

  async loadUser() {
    const id = 'd9c69907-59af-4897-b91b-4aaa529ce8d5';
    const data = await API.graphql(graphqlOperation(getUser, { id })).catch(
      err => console.log('Problem with getUser request', err)
    );
    if (data) {
      console.log('RESPONSE', data);
      this.setState({ user: data.getUser });
      this.setState({ loading: false });
    }
  }

  render() {
    console.log(this.props);
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView />
        <AvatarUpload style={{ paddingTop: 20 }} />
        <Text style={{ alignSelf: 'center', padding: 10, fontSize: 16 }}>
          Vocalist
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <Button onPress={() => console.log('connect')} title="CONNECT" />
          <Button onPress={() => console.log('pressed')} title="MESSAGE" />
        </View>

        <View style={{ paddingBottom: 40, paddingHorizontal: 10 }}>
          <TextInput
            placeholder="wall post"
            value={this.state.wallPostMessage && ''}
            onChangeText={e => this.setState({ wallPostMessage: e })}
          >
            What's new?
          </TextInput>
        </View>
      </View>
    );
  }
}
export default withAuthenticator(Profile);
