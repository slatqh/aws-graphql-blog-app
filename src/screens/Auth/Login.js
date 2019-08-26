import React, { Component } from 'react';
import {
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Auth } from 'aws-amplify';

import {
  CustomButton,
  TextInput,
  TextCustom,
  LoadingStatus,
} from '../../components';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      emailError: false,
      passwordError: false,
      authError: false,
    };
  }

  async SignIn() {
    const { username, password } = this.state;
    try {
      const user = await Auth.signIn(username, password);
      console.log('USER', user);

      if (user) {
        this.props.navigation.navigate('App');
      } else {
        this.setState({ authError: true });
      }
    } catch (err) {
      if (err.code === 'UserNotConfirmedException') {
        // The error happens if the user didn't finish the confirmation step when signing up
        // In this case you need to resend the code and confirm the user
        // About how to resend the code and confirm the user, please check the signUp part
      } else if (err.code === 'PasswordResetRequiredException') {
        // The error happens when the password is reset in the Cognito console
        // In this case you need to call forgotPassword to reset the password
        // Please check the Forgot Password part.
      } else if (err.code === 'NotAuthorizedException') {
        // The error happens when the incorrect password is provided
      } else if (err.code === 'UserNotFoundException') {
        // The error happens when the supplied username/email does not exist in the Cognito user pool
      } else {
        console.log(err);
      }
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* {!this.props.loading ? (
          <LoadingStatus loading={this.props.loading} />
        ) : null} */}
        <View style={{ flex: 1 }}>
          <SafeAreaView>
            <Image
              style={styles.image}
              source={require('../../../assets/images/logo.png')}
              resizeMode="center"
            />
          </SafeAreaView>
        </View>
        {this.state.authError ? (
          <Text style={{ color: 'red' }}>Some error with loggin</Text>
        ) : null}
        <View style={styles.text}>
          <TextInput
            placeholder="EMAIL"
            label="email"
            onChangeText={e => this.setState({ username: e, emailError: '' })}
            error={!!this.state.emailError}
          />
          <TextInput
            placeholder="PASSWORD"
            secureTextEntry
            onChangeText={e =>
              this.setState({ password: e, passwordError: '' })
            }
            password={!!this.state.passwordError}
          />
          <View style={{ margin: 15 }}>
            <CustomButton
              title="SIGN IN"
              gradient
              // onPress={() => this.signIn()}
              onPress={() => this.SignIn()}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
              marginHorizontal: 15,
            }}
          >
            <TouchableOpacity>
              <TextCustom
                title="FORGOT DETAILS?"
                size={10}
                styles={{ fontWeight: '500' }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Signup')}
            >
              <TextCustom
                title="CREATE ACCOUNT"
                size={10}
                styles={{ fontWeight: '500' }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}
          >
            <Text
              style={{
                alignSelf: 'center',
                // fontFamily: 'montserrat',
                color: '#7f8184',
                fontSize: 12,
              }}
            >
              CLICK HERE FOR
            </Text>
            <Text
              style={{
                // fontFamily: 'montserrat',
                color: '#7f8184',
                fontSize: 12,
              }}
            >
              BEAUTY BAR FOR{' '}
              <Text
                style={{
                  // fontFamily: 'montserrat-semiBold',
                  fontSize: 12,
                  paddingLeft: 3,
                }}
              >
                BUSINESS
              </Text>
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 300,
    height: 200,
  },
  text: {
    flex: 2,
    paddingHorizontal: 20,
    alignContent: 'center',
  },
});

// const mapStateToProps = ({ Auth }) => {
//   const { loading, isLoggin } = Auth;
//   return { loading, isLoggin };
// };

export default Login;
