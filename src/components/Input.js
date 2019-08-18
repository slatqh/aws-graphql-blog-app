import React from 'react';
import { StyleSheet } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import Colors from '../../const/Colors';

export const TextInput = ({
  placeholder,
  icon,
  onChangeText,
  secureTextEntry,
  error,
  label,
  password,
  containerStyle,
}) => (
  <Input
    placeholder={placeholder}
    onChangeText={onChangeText}
    autoCapitalize="none"
    placeholderTextColor={Colors.grey}
    autoCorrect={false}
    placeholderStyle={{ color: 'red', letterSpacing: 15 }}
    secureTextEntry={secureTextEntry}
    underlineColorAndroid="transparent"
    keyboardAppearance="default"
    leftIconContainerStyle={{ marginLeft: -10 }}
    rightIconContainerStyle={{ backgroundColor: 'white' }}
    inputContainerStyle={styles.inputContainerStyle}
    inputStyle={styles.inputStyle}
    containerStyle={containerStyle}
    errorMessage={
      error
        ? `Please enter ${label}.`
        : password
        ? 'Password must be at least 8 characters long.'
        : null
    }
    leftIcon={<Icon iconStyle={{ color: 'white' }} name={icon} size={24} />}
  />
);

const styles = StyleSheet.create({
  inputContainerStyle: {
    borderBottomColor: Colors.lightgrey,
    opacity: 0.9,
    height: 20,
    paddingBottom: 12.5,
    paddingTop: 25,
  },
  inputStyle: {
    color: Colors.grey,
    fontSize: 12,
    paddingLeft: 10,
    // fontFamily: 'montserrat',
  },
  containerStyle: {
    margin: 0,
    padding: 0,
    marginTop: 10,
  },
});
