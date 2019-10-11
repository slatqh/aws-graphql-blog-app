import React, { Component } from "react";
import {
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native";
import { Auth } from "aws-amplify";
import { Authenticator } from "aws-amplify-react-native";

import { CustomButton, TextInput, TextCustom } from "../../components";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      emailError: false,
      passwordError: false,
      authError: false
    };
  }

  checkInputs() {
    const { username, password } = this.state;
    if (username === null || username.length < 1) {
      this.setState({ emailError: true });
    } else if (password === null || password.length < 2) {
      this.setState({ passwordError: true });
    }
    this.SignIn();
  }

  async SignIn() {
    const { username, password } = this.state;
    try {
      const user = await Auth.signIn(username, password);
      console.log("USER", user);

      if (user) {
        this.props.navigation.navigate("App");
      } else {
        this.setState({ authError: true });
      }
    } catch (err) {
      this.setState({ authError: err.message });
      console.log(err);
    }
  }

  render() {
    const { authError, emailError, passwordError } = this.state;
    return (
      <Authenticator hideDefault>
        <View style={{ flex: 1 }}>
          <View style={{}}>
            <SafeAreaView>
              <Image
                style={styles.image}
                source={require("../../../assets/images/logo.png")}
              />
            </SafeAreaView>
          </View>
          {authError ? <Text style={{ color: "red" }}>{authError}</Text> : null}
          <View style={styles.text}>
            <TextInput
              placeholder="EMAIL"
              label="email"
              onChangeText={e => this.setState({ username: e, emailError: "" })}
              error={!!emailError}
            />
            <TextInput
              placeholder="PASSWORD"
              secureTextEntry
              onChangeText={e =>
                this.setState({ password: e, passwordError: "" })
              }
              password={!!passwordError}
            />
            <View style={{ margin: 15 }}>
              <CustomButton
                title="SIGN IN"
                gradient
                onPress={() => this.checkInputs()}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
                marginHorizontal: 15
              }}
            >
              <TouchableOpacity>
                <TextCustom
                  title="FORGOT DETAILS?"
                  size={10}
                  styles={{ fontWeight: "500" }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Signup")}
              >
                <TextCustom
                  title="CREATE ACCOUNT"
                  size={10}
                  styles={{ fontWeight: "500" }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Authenticator>
    );
  }
}

export default Login;
const styles = StyleSheet.create({
  image: {
    justifyContent: "center",
    alignSelf: "center",
    width: 300,
    height: 300
  },
  text: {
    paddingTop: 20,
    flex: 1,
    alignContent: "center"
  }
});
