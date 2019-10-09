import React, { Component } from 'react';
import { Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native';
import API, { graphqlOperation } from '@aws-amplify/api';
import { connect } from 'react-redux';
import { getUser } from '../../graphql/queries';
import { AvatarUpload } from './AvatarUpload';
import { updateUserReducer } from './action';

const data = {
  lastName: 'Dimon',
  firstName: 'Volkov',
  instrument: 'Drumms',
  gender: 'Male',
};
const userID = '1234-1234-1234-1234';

class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <Button
        onPress={() => navigation.navigate('Settings')}
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
    const id = this.props.authData.attributes['custom:authID'];
    const data = await API.graphql(graphqlOperation(getUser, { id })).catch(
      err => console.log('Problem with getUser request', err)
    );
    if (data) {
      this.props.navigation.setParams({ user: data });
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
          <Button
            onPress={() => this.props.updateUserReducer(data, userID)}
            title="CONNECT"
          />
          <Button onPress={() => console.log('pressed')} title="MESSAGE" />
        </View>
        <Text>My Post</Text>
        <TextInput
          placeholder="wall post"
          value={this.state.wallPostMessage && 'Some TExt'}
          onChangeText={e => this.setState({ wallPostMessage: e })}
        >
          What's new?
        </TextInput>
      </View>
    );
  }
}
export default connect(
  null,
  { updateUserReducer }
)(withAuthenticator(Profile));
