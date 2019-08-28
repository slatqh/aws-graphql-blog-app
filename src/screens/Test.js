import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  StyleSheet,
} from 'react-native';
import { Storage } from 'aws-amplify';
import {
  Divider,
  CardView,
  DisplayComments,
  WriteComment,
} from '../components';
import Colors from '../../const/Colors';

const data = [
  {
    title: 'Javascript',
    description: 'Javascript language become more popular recently',
    id: '1',
    image: '../../assets/images/1.jpg',
    comments: '10',
  },
  {
    title: 'Stop Paying Transaction Fees Today - Learn More!',
    description:
      'Save 30-40% on the cost of their receivables process. See how easy it is for a modern payment network to transform your business and empower your ',
    id: '2',
    image: '../../assets/images/2.jpg',
    comments: '15',
  },
  {
    title: 'Software Engineer at Disney. ',
    description:
      'Help us immerse audiences in unforgettable experiences as a Software Engineer at Disney. Discover available roles: http://di.sn/6002ELMny',
    id: '3',
    image: '../../assets/images/3.jpg',
    comments: '1',
  },
  {
    title: '3D printing is growing rapidly',
    description:
      '3D printing is growing rapidly and so is the technology. Download the guide to see the newest 3D machines.',
    id: '4',
    image: '../../assets/images/4.jpg',
    comments: '',
  },
];

export default class TestScreen extends Component {
  state = {
    comment: null,
  };

  uploadImage = () => {
    Storage.put('test.txt', 'My Content', {
      cacheControl: '', // (String) Specifies caching behavior along the request/reply chain
      contentDisposition: '', // (String) Specifies presentational information for the object
      expires: new Date().now() + 60 * 60 * 24 * 7, // (Date) The date and time at which the object is no longer cacheable. ISO-8601 string, or a UNIX timestamp in seconds
      metadata: { key: 'value' }, // (map<String>) A map of metadata to store with the object in S3.
    })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.comment);
    return (
      <View>
        <SafeAreaView />
        <Button title="upload" onPress={() => this.uploadImage} />
        <WriteComment getComment={data => this.setState({ comment: data })} />
      </View>
    );
  }
}
const styles = StyleSheet.create({});
