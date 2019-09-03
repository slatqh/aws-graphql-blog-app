import React from 'react';
import { StyleSheet } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import Colors from '../../const/Colors';

export const CustomTextInput = ({
  placeholder,
  icon,
  onChangeText,
  secureTextEntry,
  error,
  label,
  password,
  containerStyle,
  multiline,
  clearButtonMode,
}) => (
  <Input
    placeholder={placeholder}
    onChangeText={onChangeText}
    autoCapitalize="none"
    placeholderTextColor={Colors.lightgrey}
    autoCorrect={false}
    multiline={multiline}
    clearButtonMode={clearButtonMode}
    placeholderStyle={{ letterSpacing: 1, fontSize: 18 }}
    secureTextEntry={secureTextEntry}
    underlineColorAndroid="transparent"
    keyboardAppearance="default"
    // leftIconContainerStyle={{ marginLeft: -10 }}
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
    leftIcon={
      icon ? (
        <Icon iconStyle={{ color: 'white' }} name={icon} size={24} />
      ) : null
    }
  />
);

const styles = StyleSheet.create({
  inputContainerStyle: {
    borderBottomColor: Colors.lightblack,
    opacity: 0.9,
    height: 20,
    paddingBottom: 12.5,
    paddingTop: 25,
  },
  inputStyle: {
    color: Colors.lightblack,
    fontSize: 14,
    letterSpacing: 1,
    paddingLeft: 0,
    // fontFamily: 'montserrat',
  },
});
