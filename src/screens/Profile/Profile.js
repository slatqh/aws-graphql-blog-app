import React, { Component } from 'react';
import { Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native';
import API, { graphqlOperation } from '@aws-amplify/api';
import { connect } from 'react-redux';
import { getUser } from '../../graphql/queries';
import { AvatarUpload } from './AvatarUpload';
import { Loading } from '../../components';

class Profile extends Component {
  static navigationOptions = ({ navigation }) => {
    const user = navigation.getParam('user');
    return {
      headerRight: (
        <Button
          onPress={() => navigation.navigate('Settings', { user })}
          title="Settings"
        />
      ),
    };
  };

  state = {
    avatar: null,
    isLoading: false,
    user: {},
    wallPostMessage: '',
  };

  componentDidMount() {
    this.loadUser();
  }

  async loadUser() {
    this.setState({ isLoading: true });
    const id = this.props.authData.attributes['custom:authID'];
    const { data } = await API.graphql(graphqlOperation(getUser, { id })).catch(
      err => console.log('Problem with getUser request', err)
    );
    if (data) {
      this.props.navigation.setParams({ user: data.getUser });
      this.setState({ isLoading: false });
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
        <Text>My Post</Text>
        {this.state.isloading ? (
          <Loading />
        ) : (
          <TextInput
            placeholder="wall post"
            value={this.state.wallPostMessage && 'Some TExt'}
            onChangeText={e => this.setState({ wallPostMessage: e })}
          >
            What's new?
          </TextInput>
        )}
      </View>
    );
  }
}
export default connect(
  null,
  {}
)(withAuthenticator(Profile));
