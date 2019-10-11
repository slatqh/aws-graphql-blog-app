import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";

export default class ProfileUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instrument: null,
      city: null
    };
  }

  render() {
    return (
      <View>
        <Text>Your Instrumnet</Text>
        <TextInput
          value={this.state.instument && ""}
          onChangeText={e => this.setState({ instrument: e })}
        />
      </View>
    );
  }
}
