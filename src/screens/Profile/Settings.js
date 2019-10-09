import React, { Component, useState } from 'react';
import { Text, View, Button, ScrollView, TextInput } from 'react-native';
import { Auth } from 'aws-amplify';
import { connect } from 'react-redux';
import { getUser } from '../../graphql/queries';
import Wrapper from '../withContentHOC';

const UserFields = ({ userFields }) => {
  console.log(userFields);
  const [value, setValue] = useState(userFields);
  return <TextInput value={value} onChangeText={e => setValue(e)} />;
};

class Settings extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <Button
        onPress={() =>
          Auth.signOut()
            .then(() => navigation.navigate('Auth'))
            .catch(err => console.log(err))
        }
        title="sign out"
      />
    ),
  });

  state = {
    user: {},
  };

  componentDidMount() {
    // const user = this.props.navigation.getParam('user');
    // console.log('USER', user);
  }

  render() {
    console.log('Settings', this.props.user);
    return (
      <ScrollView>
        {/* <Wrapper
          query={getUser}
          id="d9c69907-59af-4897-b91b-4aaa529ce8d5"
          action="get user data"
        >
          {({ data }) =>
            Object.values(data.getUser).map(e => <UserFields userFields={e} />)
          }
        </Wrapper> */}
        {Object.values(this.props.user).map(e => (
          <UserFields userFields={e} />
        ))}
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
          {/* <Text>First Name</Text>
          <TextInput
            value={this.props.authData.attributes['custom:firstName']}
            style={{ fontSize: 14, letterSpacing: 1 }}
          />
          <Text>Last Name</Text>
          <TextInput
            value={this.props.authData.attributes['custom:lastName']}
          />
          <Text>Email</Text>
          <Text>{this.props.authData.attributes['email']}</Text> */}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state.user;
  return { user };
};
export default connect(
  mapStateToProps,
  {}
)(Settings);
