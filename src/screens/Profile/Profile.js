import React, { Component } from 'react';
import { Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native';
import API, { graphqlOperation } from '@aws-amplify/api';
import { connect } from 'react-redux';
import { getUser } from '../../graphql/queries';
import { AvatarUpload } from './AvatarUpload';
import { Loading } from '../../components';
import Wrapper from '../withContentHOC';
import Colors from '../../../const/Colors';

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
    user: null,
    userId: null,
    userpost: [],
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
      this.setState({
        user: data.getUser,
        userpost: data.getUser.userpost.items,
      });
      this.props.navigation.setParams({ user: data.getUser });
      this.setState({ isLoading: false });
    }
  }

  render() {
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
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <View>
            <TextInput
              placeholder="What's new?"
              // value={this.state.wallPostMessage}
              style={{ padding: 5, borderWidth: 1, borderColor: Colors.teal }}
              onChangeText={e => this.setState({ wallPostMessage: e })}
            />
            <Text style={{ fontSize: 18, fonFamily: 'Playfair' }}>My Post</Text>
            {this.state.userpost.map(e => (
              <Text style={{ fontFamily: 'Raleway-Regular', fontSize: 18 }}>
                {e.title}
              </Text>
            ))}
          </View>
        )}
      </View>
    );
  }
}
export default connect(
  null,
  {}
)(withAuthenticator(Profile));
