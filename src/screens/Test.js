import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Storage, Auth } from 'aws-amplify';
import API, { graphqlOperation } from '@aws-amplify/api';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import { createUser } from '../graphql/mutations';
import { ImageSelect, PostAuthor, Avatar } from '../components';
import Colors from '../../const/Colors';
import { GOOGLE_GEOLOCATION_API } from '../../const/api';
// import Colors from '../../const/Colors';

export default class TestScreen extends Component {
  state = {
    images: [],
  };

  componentDidMount() {
    // if (hasLocationPermission) {
    Geolocation.getCurrentPosition(
      position => {
        console.log('Position', position);
        const { latitude, longitude } = position.coords;
        this.getUserCity(latitude, longitude);
        Geolocation.clearWatch();
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
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
    console.log(data);
    data.results.map(i => {
      if (i.types[0] === 'administrative_area_level_2') {
        console.log(i.formatted_address);
        // console.log('found');
      }
    });
  }

  render() {
    const avatar = false;
    return (
      <View style={{}}>
        <SafeAreaView />
      </View>
    );
  }
}
const styles = StyleSheet.create({});
