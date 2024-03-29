import React, { Component, useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Button as CustomButton,
} from 'react-native';
import { Auth } from 'aws-amplify';
import { connect } from 'react-redux';
import { getUser } from '../../graphql/queries';
import Wrapper from '../withContentHOC';
import { Button } from '../../components';
import Colors from '../../../const/Colors';

const UserFields = ({ property, value }) => {
  const [field, setFields] = useState(value);
  console.log(field);
  return (
    <TextInput
      style={{
        paddingVertical: 5,
        marginVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: Colors.purple,
      }}
      value={field}
      onChangeText={e => setFields(e)}
    />
  );
};

class Settings extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <CustomButton
        onPress={() =>
          Auth.signOut()
            .then(() => navigation.navigate('Auth'))
            .catch(err => console.log(err))
        }
        title="sign out"
      />
    ),
  });

  updateUser() {
    console.log('user updated');
  }

  render() {
    const user = this.props.navigation.getParam('user');
    console.log(user);
    return (
      <ScrollView contentContainerStyle={{ flex: 1, marginHorizontal: 10 }}>
        <View style={{ flex: 2 }}>
          <UserFields value={user.lastName} />
          <UserFields value={user.firstName} />
          <UserFields value={user.username} />
          <UserFields value={user.instrument} />
          <UserFields value={user.phone} />
        </View>
        <View
          style={{
            paddingHorizontal: 10,
            justifyContent: 'flex-end',
            marginBottom: 30,
          }}
        >
          <Button title="Save" onPress={() => this.updateUser()} />
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
