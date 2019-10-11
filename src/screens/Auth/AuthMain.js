import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { Loading } from "../../components";
import Login from "./Login";

export default class AuthMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUser: false
    };
  }

  componentDidMount() {
    Auth.currentAuthenticatedUser()
      .then(user => {
        if (user) {
          this.props.navigation.navigate("App");
        } else {
          this.setState({ isUser: false });
        }
      })
      .catch(e => {
        console.log(e);
        this.setState({ isUser: true });
      });
  }

  render() {
    const { isUser } = this.state;

    if (isUser) {
      return <Login {...this.props} />;
    }

    return <Loading />;
  }
}
