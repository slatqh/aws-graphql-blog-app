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
    };
  }

  checkInputs() {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = this.state;
    if (firstName === null || firstName.length < 1) {
      this.setState({ nameError: true });
    } else if (lastName === null || lastName.length < 1) {
      this.setState({ lastNameError: true });
    } else if (email === null || email.length < 1) {
      this.setState({ emailError: true });
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

  async createUser() {
    const { username, lastName, firstName } = this.state;
    const user = {
      firstName,
      lastName,
      username,
    };
    try {
      await API.graphql(graphqlOperation(createUser, { input: user }))
        .then(this.props.navigation.navigate('App'))
        .catch(err =>
          console.log(`Problem with create user graphql model `, err)
        );
    } catch (error) {}
  }

  createAccount() {
    const { email, password, lastName, firstName } = this.state;
    const username = email;
    this.setState({ isLoading: true });
    Auth.signUp({
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
    })
      .then(data => {
        this.setState({ isLoading: false });
        if (data) {
          this.setState({ confirmation: true });
        } else {
          this.setState({
            signUpError:
              'Ops, some error while creating an acoount. Please try again.',
            isLoading: false,
          });
        }
      })
      .catch(err => {
        this.setState({ signUpError: err, isLoading: false });
        console.log(err);
      });
  }

  confirmationCode() {
    const { code, email } = this.state;
    const username = email;
    this.setState({ isLoading: true });
    Auth.confirmSignUp(username, code, {
      forceAliasCreation: true,
    })
      .then(data => {
        if (data) {
          this.createUserGraphQlModal(data);
        }
      })
      .catch(err => this.setState({ signUpError: err, isLoading: false }));
  }

  async createUserGraphQlModal() {
    const { email, password } = this.state;
    try {
      const user = await Auth.signIn(email, password);
      console.log('USER', user);

      if (user) {
        const createUserModal = {
          authID: user.attributes.sub,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          username: this.state.username,
        };
        const userGraphql = await API.graphql(
          graphqlOperation(createUser, { input: createUserModal })
        ).catch(err =>
          console.log(`Problem with create user graphql model `, err)
        );
        const userID = userGraphql.data.createUser.id;
        const updateUser = await Auth.currentAuthenticatedUser({
          bypassCache: false,
        });
        await Auth.updateUserAttributes(updateUser, {
          'custom:authID': userID,
        });
        this.props.navigation.navigate('Login');
      } else {
        this.setState({ signUpError: true });
      }
    } catch (err) {
      this.setState({ signUpError: err.message });
      console.log(err);
    }
  }

  render() {
    console.log(this.props);
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
            error={!!emailError}
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
          <Button title="signup" onPress={() => this.updateAtt()} />
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
