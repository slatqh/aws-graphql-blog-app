import React, { Component } from 'react';
import {
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

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
      email: null,
      password: null,
      emailError: false,
      passwordError: false,
    };
  }

  // async signIn() {
  //   const { email, password } = this.state;
  //   if (email === null) {
  //     this.setState({ emailError: true });
  //     return;
  //   }
  //   if (password === null || password.length < 7) {
  //     this.setState({ passwordError: true });
  //   }
  //   await this.props.login({ email, password });
  //   if (this.props.isLoggin) {
  //     this.props.navigation.navigate('App');
  //   }
  // }

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
        <View style={styles.text}>
          <TextInput
            placeholder="EMAIL"
            label="email"
            onChangeText={e => this.setState({ email: e, emailError: '' })}
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
              onPress={() => this.props.navigation.navigate('App')}
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
