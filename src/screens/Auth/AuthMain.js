import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native';
import { CustomButton } from '../../components';

export default class AuthMain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 2 }}>
          <SafeAreaView>
            <Image
              style={styles.image}
              source={require('../../../assets/images/logo.png')}
              resizeMode="center"
            />
          </SafeAreaView>
        </View>
        <View style={styles.container}>
          <CustomButton
            title="CREATE ACCOUNT"
            gradient
            onPress={() => this.props.navigation.navigate('Signup')}
          />
          <View style={styles.wrapper}>
            <View style={styles.wrapperOr} />
            <Text style={styles.or}> OR</Text>
            <View style={styles.wrapperOr} />
          </View>
          <CustomButton
            title="CONTINUE WITH FACEBOOK"
            color="#3b5998"
            icon="facebook"
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 20,
            }}
          >
            {/* <Image
              source={require('../../../assets/images/google.jpg')}
              style={styles.googleImage}
            /> */}
            <CustomButton title="CONTINUE WITH GOOGLE" titleColor="#7f8184" />
          </View>
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
          // style={{ fontFamily: 'montserrat', color: '#7f8184', fontSize: 12 }}
          >
            BEAUTY BAR FOR
            <Text
              style={{
                // fontFamily: 'montserrat-semiBold',
                fontSize: 12,
              }}
            >
              BUSINESS
            </Text>
          </Text>
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
  container: {
    flex: 1,
    alignSelf: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 20,
  },
  wrapperOr: {
    width: 50,
    borderTopWidth: 4,
    borderTopColor: '#cfd8dc',
  },
  or: {
    paddingHorizontal: 10,
    // fontFamily: 'Montserrat',
    color: '#7f8184',
  },
  googleImage: {
    width: 30,
    height: 30,
    marginRight: 30,
  },
});
