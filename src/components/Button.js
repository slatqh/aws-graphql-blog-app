import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import Colors from '../../const/Colors';

export default class Button extends Component {
  getStyle() {
    switch (this.props.type) {
      case 'noBorder':
        return noBorder;

      case 'Border':
        return Border;

      case 'facebook':
        return Facebook;
      default:
        return 'noBorder';
    }
  }

  render() {
    const styles = this.getStyle();

    return (
      <TouchableOpacity
        disabled={
          this.props.loading ||
          (this.props.disabled && !this.props.onPressDisabled)
        }
        onPress={() => {
          if (this.props.disabled) {
            if (this.props.onPressDisabled) {
              this.props.onPressDisabled();
            }
          } else {
            this.props.onPress();
          }
        }}
        style={[
          styles.container,
          this.props.containerStyle,
          this.props.disabled ? styles.containerDisabled : null,
        ]}
      >
        {this.props.loading ? (
          <ActivityIndicator style={styles.progress} />
        ) : this.props.type === 'facebook' ? (
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../../assets/images/fb-icon.png')}
              style={{
                width: 24,
                height: 24,
                flex: 0.2,
                marginRight: 10,
                marginBottom: 4,
              }}
              resizeMode="contain"
            />
            <Text style={[styles.text, this.props.textStyle]}>
              {this.props.text}
            </Text>
          </View>
        ) : (
          <Text style={[styles.text, this.props.textStyle]}>
            {this.props.text}
          </Text>
        )}
      </TouchableOpacity>
    );
  }
}

export const noBorder = StyleSheet.create({
  container: {
    height: 56,
    width: '90%',
    borderRadius: 8,
    // borderColor: '#9a9d9e',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.blue,
    //   shadowOffset: {
    //     width: 2,
    //     height: 2
    //   },
    //   shadowOpacity: 0.1,
    //   shadowRadius: 2,
    //   elevation: 2
  },
  containerDisabled: {
    borderColor: '#E0E0E0',
    backgroundColor: '#E0E0E0',
  },
  text: {
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: Colors.bg,
    fontFamily: 'Avenir-Medium',
    fontSize: 17,
  },
  progress: {
    alignSelf: 'center',
  },
});

export const Border = StyleSheet.create({
  container: {
    height: 56,
    width: '90%',
    borderRadius: 8,
    borderColor: Colors.blue,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.bg,
    // shadowOffset: {
    //   width: 2,
    //   height: 2
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    // elevation: 2
  },
  containerDisabled: {
    borderColor: '#E0E0E0',
    backgroundColor: '#E0E0E0',
  },
  text: {
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: Colors.blue,
    fontFamily: 'Avenir-Medium',
    fontSize: 17,
  },
  progress: {
    alignSelf: 'center',
  },
});

export const Facebook = StyleSheet.create({
  container: {
    height: 56,
    width: '90%',
    borderRadius: 8,
    borderColor: '#9a9d9e',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4267B2',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  containerDisabled: {
    borderColor: '#E0E0E0',
    backgroundColor: '#E0E0E0',
  },
  text: {
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'AvenirLTStd-Book',
    fontSize: 17,
  },
  progress: {
    alignSelf: 'center',
  },
});
