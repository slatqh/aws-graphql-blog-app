import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Storage } from 'aws-amplify';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Colors from '../../const/Colors';
import { Divider } from './Divider';
import { Avatar } from './Avatar';

const { width, height } = Dimensions.get('window');
const IMAGE_HEIGHT = height / 4;
const IMAGE_WIDTH = width / 1.7;

// const CARD_WIDTH = width / 1.7;
const CARD_HEIGHT = IMAGE_HEIGHT / 2.5;

export const CardView = ({
  onPress,
  title,
  description,
  postImage,
  comments,
  deletePost,
}) => {
  const [images, setImages] = useState([]);
  console.log(postImage[0].key);
  useEffect(() => {
    Storage.get(postImage[0].key)
      .then(img => setImages(img))
      .catch(err => console.log(err));
  });
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        borderColor: Colors.lightgrey,
        borderWidth: 1,
        backgroundColor: Colors.white,
        shadowOffset: { width: -1, height: 9 },
        shadowColor: '00000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
      }}
    >
      <Avatar />
      <Button title="delete" onPress={deletePost} />
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
      <View
        style={{ borderWidth: 1, borderColor: 'black', overflow: 'hidden' }}
      >
        <Image
          // style={styles.backgroundImage}
          source={{ uri: images }}
          style={{
            width: null,
            height: 150,
            backgroundColor: Colors.white,
          }}
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
            {/* <Icon name="thumbs-o-up" size={24} color={Colors.black} /> */}
            <Text style={styles.fields}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.fieldsContainer}>
            {/* <MaterialIcon
              name="comment-text-outline"
              size={24}
              color={Colors.black}
              style={{ paddingTop: 5 }}
            /> */}
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
};

const styles = StyleSheet.create({
  fieldsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fields: {
    fontSize: 14,
    color: Colors.black,
    paddingLeft: 5,
  },
});
