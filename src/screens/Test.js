import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { Divider, CardView } from '../components';
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
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        {data.map(el => (
          <CardView
            description={el.description}
            image={el.image}
            comments={el.commnets}
            title={el.title}
          />
        ))}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({});
