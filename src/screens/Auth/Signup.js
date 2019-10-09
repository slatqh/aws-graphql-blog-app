import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Alert,
  Button,
  TextInput as RNTextInput,
} from 'react-native';
import { Auth } from 'aws-amplify';
import Icon from 'react-native-vector-icons/Ionicons';
import API, { graphqlOperation } from '@aws-amplify/api';
import { createUser } from '../../graphql/mutations';
import { CustomButton, TextInput, TextCustom, Loading } from '../../components';
// import { updateUserReducer} from '..'

import Colors from '../../../const/Colors';

const { height } = Dimensions.get('window');
const HEADER = height / 8;

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      confirmPassword: null,
      signUpError: null,
      nameError: false,
      lastNameError: false,
      emailError: false,
      passwordError: false,
      username: null,
      usernameError: false,
      passwordConfirmError: false,
      confirmation: false,
      code: null,
      isLoading: false,
      instrument: null,
      instrumentError: false,
    };
  }

  checkInputs() {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      instrument,
      username,
    } = this.state;
    if (firstName === null || firstName.length < 1) {
      this.setState({ nameError: true });
    } else if (lastName === null || lastName.length < 1) {
      this.setState({ lastNameError: true });
    } else if (email === null || email.length < 1) {
      this.setState({ emailError: true });
    } else if (username === null || username.length < 1) {
      this.setState({ usernameError: true });
    } else if (instrument === null || instrument.length < 1) {
      this.setState({ instrumentError: true });
    } else if (password === null || password.length < 7) {
      this.setState({ passwordError: true });
    } else if (confirmPassword === null || confirmPassword.length < 1) {
      this.setState({ passwordConfirmError: true });
    } else if (password !== confirmPassword) {
      Alert.alert('Password not match', null, [{ text: 'OK' }], {
        cancelable: false,
      });
    } else {
      this.createAccount();
    }
  }

  // creating Cognito account
  async createAccount() {
    const { email, password, lastName, firstName } = this.state;
    const username = email;
    this.setState({ isLoading: true });
    const signUpSuccess = await Auth.signUp({
      username,
      email,
      password,
      attributes: {
        'custom:lastName': lastName,
        'custom:firstName': firstName,
        nickname: this.state.username,
        'custom:authID': 'id',
      },
      validationData: [], // optional
    }).catch(err => console.log(err));

    if (signUpSuccess) {
      this.setState({ isLoading: false });
      this.setState({ confirmation: true });
    }
    this.setState({
      signUpError:
        'Ops, some error while creating an account. Please try again.',
      isLoading: false,
    });
  }

  // show textinput for confirmation code
  confirmationCode() {
    const { code, email } = this.state;
    const username = email;
    this.setState({ isLoading: true });
    Auth.confirmSignUp(username, code, {
      forceAliasCreation: true,
    })
      .then(() => {
        this.createUserGraphQlModal();
      })
      .catch(err => this.setState({ signUpError: err, isLoading: false }));
  }

  // getting auth creds from Cognito and creating a user with AppSync GraphQL User model
  async createUserGraphQlModal() {
    const { email, password } = this.state;
    try {
      const user = await Auth.signIn(email, password); // signin user

      if (user) {
        try {
          const createUserInDb = {
            authID: user.attributes.sub,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            instrument: this.state.instrument,
          };
          // updating GraphQl User Type with args
          const userGraphQL = await API.graphql(
            graphqlOperation(createUser, { input: createUserInDb })
          ).catch(err => {
            throw new Error(err);
          });
          const userID = userGraphQL.data.createUser.id;
          const updateUser = await Auth.currentAuthenticatedUser({
            bypassCache: false,
          });
          await Auth.updateUserAttributes(updateUser, {
            'custom:authID': userID,
          });
          // here is some bug to apdate Cognito user attributes
          // we have signOut and signin user back to get attributes update
          await Auth.signOut()
            .then(() => {
              Auth.signIn(email, password);
              this.setState({ isLoading: false });
              this.props.navigation.navigate('App');
            })
            .catch(err => console.log(err));
        } catch (error) {
          throw new Error(error);
        }
      }
      this.setState({ signUpError: true });
    } catch (err) {
      this.setState({ signUpError: err.message });
      throw new Error(err);
    }
  }

  render() {
    console.log(this.state.instrument);
    const {
      confirmation,
      email,
      emailError,
      signUpError,
      passwordConfirmError,
      nameError,
      lastNameError,
      passwordError,
      isLoading,
      instrumentError,
      usernameError,
    } = this.state;
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
          <SafeAreaView>
            <Icon
              onPress={() => navigation.goBack(null)}
              style={{
                position: 'absolute',
                top: HEADER / 2.5,
                left: 10,
                marginBottom: 10,
              }}
              name="ios-arrow-round-back"
              type="ionicons"
              color={Colors.purple}
              size={35}
            />
            <Image
              style={styles.logo}
              source={require('../../../assets/images/logo.png')}
              resizeMode="center"
            />
          </SafeAreaView>
        </View>
        <View style={styles.wrap}>
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              containerStyle={{ flex: 1 }}
              placeholder="FIRST NAME"
              label="first name"
              onChangeText={e =>
                this.setState({
                  firstName: e,
                  nameError: false,
                  signUpError: null,
                })
              }
              error={!!nameError}
            />
            <TextInput
              placeholder="LAST NAME"
              containerStyle={{ flex: 1 }}
              label="last name"
              onChangeText={e =>
                this.setState({
                  lastName: e,
                  lastNameError: false,
                })
              }
              error={!!lastNameError}
            />
          </View>
          <TextInput
            label="email"
            placeholder="EMAIL"
            onChangeText={e =>
              this.setState({
                email: e,
                emailError: false,
                signUpError: null,
              })
            }
            error={!!emailError}
          />
          <TextInput
            label="username"
            placeholder="USERNAME"
            onChangeText={e =>
              this.setState({
                username: e,
                usernameError: false,
                signUpError: null,
              })
            }
            error={!!usernameError}
          />
          <TextInput
            label="instrument"
            placeholder="YOUR INSTRUMEMT"
            onChangeText={e =>
              this.setState({
                instrument: e,
                instrumentError: false,
                signUpError: null,
              })
            }
            error={!!instrumentError}
          />
          <TextInput
            label="password"
            placeholder="PASSWORD"
            secureTextEntry
            onChangeText={e =>
              this.setState({
                password: e,
                passwordError: false,
                signUpError: null,
              })
            }
            password={!!passwordError}
          />
          <TextInput
            placeholder="CONFIRM PASSWORD"
            secureTextEntry
            onChangeText={e =>
              this.setState({
                confirmPassword: e,
                passwordConfirmError: false,
                signUpError: null,
              })
            }
            password={!!passwordConfirmError}
          />

          <View style={{ marginTop: 20, paddingLeft: 10 }} />
          {confirmation ? (
            <View>
              <TextCustom
                title={` Confirmation code sent to ${email}`}
                styles={{ alignSelf: 'center' }}
              />
              <RNTextInput
                placeholder="Enter code"
                style={{
                  marginTop: 10,
                  padding: 20,
                  borderWidth: 1,
                  borderColor: 'black',
                }}
                onChangeText={e => this.setState({ code: e })}
              />
            </View>
          ) : null}
          {signUpError ? (
            <Text style={styles.error}>{signUpError.message}</Text>
          ) : null}
          {isLoading ? <Loading /> : null}
          <View
            style={{
              flex: 0.3,
              alignSelf: 'center',
              justifyContent: 'flex-start',
              marginHorizontal: 25,
            }}
          />
          <CustomButton
            title={confirmation ? 'CONFIRM' : 'CREATE ACCOUNT'}
            gradient
            onPress={() =>
              confirmation ? this.confirmationCode() : this.checkInputs()
            }
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  logo: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 120,
    height: 80,
  },
  wrap: {
    flex: 2,
    paddingHorizontal: 20,
    // alignContent: 'flex-start',
  },
  checkBox: {
    backgroundColor: 'white',
    borderColor: 'white',
  },
  error: {
    alignSelf: 'center',
    color: 'red',
    fontSize: 12,
    // fontFamily: 'montserrat',
  },
  checkBoxTitle: {
    color: Colors.grey,
    // fontFamily: 'montserrat',
    fontWeight: '300',
    fontSize: 12,
    letterSpacing: 1,
  },
});
// export default withAuthenticator(CreateAccount, {
//   authenticatorComponents: [<CreateAccount />],
// });

export default CreateAccount;
