import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Alert,
} from 'react-native';
import { Auth } from 'aws-amplify';
import { CheckBox } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import { CustomButton, TextInput, TextCustom, Avatar } from '../../components';

import Colors from '../../../const/Colors';

const { height } = Dimensions.get('window');
const HEADER = height / 8;

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      male: null,
      female: null,
      gender: null,
      username: null,
      lastName: null,
      email: null,
      password: null,
      confirmPassword: null,
      phone: null,
      error: null,
      nameError: false,
      lastNameError: false,
      emailError: false,
      passwordError: false,
      passwordConfirmError: false,
      genderError: false,
      avatarSource: '',
      confirmation: false,
      code: null,
    };
  }

  // checkInputs() {
  //   const {
  //     name,
  //     lastName,
  //     email,
  //     password,
  //     confirmPassword,
  //     gender,
  //   } = this.state;
  //   if (name === null || name.length < 1) {
  //     this.setState({ nameError: true });
  //   } else if (lastName === null || lastName.length < 1) {
  //     this.setState({ lastNameError: true });
  //   } else if (email === null || email.length < 1) {
  //     this.setState({ emailError: true });
  //   } else if (password === null || password.length < 7) {
  //     this.setState({ passwordError: true });
  //   } else if (confirmPassword === null || confirmPassword.length < 1) {
  //     this.setState({ passwordConfirmError: true });
  //   } else if (password !== confirmPassword) {
  //     Alert.alert('Password not match', null, [{ text: 'OK' }], {
  //       cancelable: false,
  //     });
  //   } else if (gender === null) {
  //     this.setState({ genderError: true });
  //   } else {
  //     this.createAccount();
  //   }
  // }

  async createAccount() {
    const { username, email, password, gender, phone } = this.state;
    Auth.signUp({
      username,
      password,
      attributes: {
        email, // optional
        // phone,   // optional - E.164 number convention
        // other custom attributes
      },
      validationData: [], // optional
    })
      .then(data => {
        console.log(data);
        this.setState({ confirmation: true });
      })
      .catch(err => console.log(err));

    // After retrieving the confirmation code from the user

    // Auth.resendSignUp(name).then(() => {
    //     console.log('code resent successfully');
    // }).catch(e => {
    //     console.log(e);
    // });
  }

  confirmationCode() {
    const { username, code } = this.state;
    Auth.confirmSignUp(username, code, {
      // Optional. Force user confirmation irrespective of existing alias. By default set to True.
      forceAliasCreation: true,
    })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
          <SafeAreaView>
            {/* <Icon
              onPress={() => this.props.navigation.goBack(null)}
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
            /> */}
            <Image
              style={styles.logo}
              source={require('../../../assets/images/logo.png')}
              resizeMode="center"
            />
          </SafeAreaView>
          {/* <Avatar onPress={() => this.selectPhotoTapped()} /> */}
        </View>
        <View style={styles.wrap}>
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              containerStyle={{ flex: 1 }}
              placeholder="FIRST NAME"
              label="first name"
              onChangeText={e =>
                this.setState({ username: e, nameError: false })
              }
              error={!!this.state.nameError}
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
              error={!!this.state.lastNameError}
            />
          </View>
          <TextInput
            label="email"
            placeholder="EMAIL"
            onChangeText={e => this.setState({ email: e, emailError: false })}
            error={!!this.state.emailError}
          />
          <TextInput
            label="password"
            placeholder="PASSWORD"
            secureTextEntry
            onChangeText={e =>
              this.setState({ password: e, passwordError: false })
            }
            password={!!this.state.passwordError}
          />
          <TextInput
            placeholder="CONFIRM PASSWORD"
            secureTextEntry
            onChangeText={e =>
              this.setState({
                confirmPassword: e,
                passwordConfirmError: false,
              })
            }
            password={!!this.state.passwordConfirmError}
          />
          <TextInput
            placeholder="PHONE"
            onChangeText={e => this.setState({ phone: e })}
          />

          <TextInput
            placeholder="CONFIMATION CODE"
            onChangeText={e => this.setState({ code: e })}
          />
          <View style={{ marginTop: 20, paddingLeft: 10 }} />
          {this.props.error ? (
            <Text style={styles.error}>{this.props.error}</Text>
          ) : null}
          <View
            style={{
              flex: 0.3,
              alignSelf: 'center',
              justifyContent: 'flex-start',
              marginHorizontal: 25,
            }}
          />
          {!this.state.confirmation ? (
            <CustomButton
              title="CREATE ACCOUNT"
              gradient
              onPress={() => this.createAccount()}
            />
          ) : (
            <CustomButton
              title="Confirm"
              gradient
              onPress={() => this.confirmationCode()}
            />
          )}
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

// const mapStateToProps = ({ Auth }) => {
//   const { loading, isLoggin, error } = Auth;
//   return { loading, isLoggin, error };
// };

export default connect(
  null,
  {}
)(CreateAccount);
