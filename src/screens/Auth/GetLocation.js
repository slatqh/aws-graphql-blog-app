import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import { Button, Loading } from '../../components';
import { GOOGLE_GEOLOCATION_API } from '../../../const/api';
import Colors from '../../../const/Colors';
// import Colors from '../../const/Colors';

export default class GetLocation extends Component {
  state = {
    input: '',
    location: '',
    isLoading: true,
  };

  componentDidMount() {
    // if (hasLocationPermission) {
    Geolocation.getCurrentPosition(
      async position => {
        console.log('Position', position);
        const { latitude, longitude } = await position.coords;
        await this.getUserCity(latitude, longitude);
        // Geolocation.clearWatch();
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
        this.setState({ isLoading: false });
      },
      { enableHighAccuracy: false, timeout: 15000, maximumAge: 10000 }
    );
    // }
  }

  async getUserCity(lat, lng) {
    console.log(lat, lng);
    const { data } = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_GEOLOCATION_API}`
    );
    data.results.map(i => {
      if (i.types[0] === 'administrative_area_level_2') {
        console.log(i.formatted_address);
        this.setState({ location: i.formatted_address, isLoading: false });
      }
    });
  }

  render() {
    const { isLoading } = this.state;
    return (
      // <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text style={{ fontSize: 20 }}>
            {isLoading ? 'Looking for you location...' : null}
          </Text>
          <Text style={{ fontSize: 28, alignSelf: 'center' }}>
            {' '}
            {isLoading ? <Loading /> : this.state.location}
          </Text>
          <Text style={{ color: Colors.grey }}>You can change it later</Text>
        </View>
        <View style={{ justifyContent: 'flex-end', marginBottom: 20 }}>
          <Button
            text="Continue"
            type="noBorder"
            // loading={this.state.loading}
            // containerStyle={styles.loginButton}
            onPress={() => this.props.navigation.navigate('App')}
          />
        </View>
      </View>
      // </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({});
