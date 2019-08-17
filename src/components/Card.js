import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Colors from '../../const/Colors';
import { Divider } from './Divider';
import { Avatar } from './Avatar';

const { width, height } = Dimensions.get('window');
const IMAGE_HEIGHT = height / 4;
const IMAGE_WIDTH = width / 1.7;

// const CARD_WIDTH = width / 1.7;
const CARD_HEIGHT = IMAGE_HEIGHT / 2.5;

export const CardView = ({ onPress, title, description, image, comments }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      margin: 10,
      borderRadius: 5,
      borderColor: Colors.grey,
      borderWidth: 1,
      // overflow: 'hidden',
      backgroundColor: Colors.white,
      shadowOffset: { width: -1, height: 8 },
      shadowColor: '00000',
      shadowOpacity: 0.2,
      shadowRadius: 5,
    }}
  >
    <Avatar />
    <Divider style={{ marginHorizontal: 10 }} />
    <Text
      style={{
        fontSize: 14,
        letterSpacing: 1,
        color: Colors.black,
        padding: 10,
      }}
    >
      {title}
    </Text>
    <View style={{ borderWidth: 1, borderColor: 'black', overflow: 'hidden' }}>
      <Image
        // style={styles.backgroundImage}
        style={{
          width: null,
          height: 150,
          // overflow: 'visible',
          backgroundColor: Colors.white,
        }}
        source={require('../../assets/images/3.jpeg')}
        resizeMethod="scale"
      />
    </View>

    <View style={{}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 7,
        }}
      >
        <View
          style={{
            flex: 0.3,
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}
        >
          <Icon name="heart-o" size={15} color={Colors.lightblack} />
          <Icon name="smile-o" size={15} color={Colors.lightblack} />
          <Icon name="thumbs-o-up" size={15} color={Colors.lightblack} />
        </View>
        <Text style={{ color: Colors.lightblack, fontSize: 12 }}>
          299 Comments
        </Text>
      </View>
      <Divider />
      <View // commnets /  like / share
        style={{
          flex: 1,
          padding: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          alignItems: 'center',
        }}
      >
        <TouchableOpacity style={styles.fieldsContainer}>
          <Icon name="thumbs-o-up" size={24} color={Colors.black} />
          <Text style={styles.fields}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fieldsContainer}>
          <MaterialIcon
            name="comment-text-outline"
            size={24}
            color={Colors.black}
            style={{ paddingTop: 5 }}
          />
          <Text style={styles.fields}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fieldsContainer}>
          <Icon name="share" size={24} color={Colors.black} />
          <Text style={styles.fields}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  // backgroundImage: {
  //   width: IMAGE_WIDTH,
  //   height: IMAGE_HEIGHT,
  //   justifyContent: 'flex-end',
  //   flex: 1,
  //   borderRadius: 10,
  //   overflow: 'hidden',
  //   backgroundColor: 'white',
  // },
  // textContainer: {
  //   flex: 1,
  //   justifyContent: 'flex-end',
  //   alignItems: 'flex-start',
  //   marginLeft: 5,
  //   marginBottom: 5,
  // },
  // title: {
  //   color: 'white',
  //   letterSpacing: 2,
  //   // fontFamily: 'montserrat-medium',
  // },

  // desc: {
  //   fontSize: 14,
  //   // fontFamily: 'montserrat',
  // },
  // descTime: {
  //   fontSize: 12,
  //   // padding: 3,
  //   // fontFamily: 'montserrat',
  //   fontWeight: '500',
  //   opacity: 0.7,
  // },
  // android: {
  //   backgroundColor: 'white',
  //   height: CARD_HEIGHT,
  //   alignItems: 'flex-start',
  //   justifyContent: 'space-around',
  // },
  // ios: {
  //   backgroundColor: 'white',
  //   flex: 0.5,
  //   alignItems: 'flex-start',
  //   justifyContent: 'space-around',
  // },
  fieldsContainer: {
    // alignContent: 'space-around',
    // justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
  fields: {
    fontSize: 14,
    color: Colors.black,
    paddingLeft: 5,
  },
});
