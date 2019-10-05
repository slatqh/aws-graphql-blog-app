import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import { Storage } from 'aws-amplify';
import Colors from '../../const/Colors';
import { Divider } from './Divider';
import { PostAuthor } from './PostAuthor';
import { PostOptions } from './PostOptions';

export const CardView = ({ onPress, title, user, postImage, deletePost }) => {
  const [images, setImages] = useState([]);
  const [deleteMenu, setDeleteMenu] = useState(false);
  useEffect(() => {
    if (postImage) {
      Storage.get(postImage[0].key)
        .then(img => setImages(img))
        .catch(err => console.log(err));
    }
  });
  return (
    <TouchableOpacity onPress={() => onPress(images)} style={styles.container}>
      <PostAuthor name={user.username} status="Happyest">
        <PostOptions delete={deletePost} />
      </PostAuthor>
      <Divider style={{ marginHorizontal: 10 }} />
      <Text style={styles.title}>{title}</Text>
      {images.length > 0 ? (
        <View
          style={{
            borderWidth: 1,
            borderColor: Colors.lightgrey,
            overflow: 'hidden',
          }}
        >
          <Image
            source={{ uri: images }}
            style={{
              height: 150,
              backgroundColor: Colors.white,
            }}
            cache="force-cache"
            resizeMethod="scale"
          />
        </View>
      ) : null}

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
        style={styles.commentLikeShare}
      >
        <TouchableOpacity style={styles.fieldsContainer}>
          <Text style={styles.fields}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fieldsContainer}>
          <Text style={styles.fields}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fieldsContainer}>
          <Icon name="share" size={24} color={Colors.black} />
          <Text style={styles.fields}>Share</Text>
        </TouchableOpacity>
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
  container: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    borderColor: Colors.lightgrey,
    borderWidth: 1,
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  title: {
    fontSize: 14,
    letterSpacing: 1,
    color: Colors.black,
    padding: 10,
  },
  commentLikeShare: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  deleteMeneFields: {
    fontSize: 12,
    color: Colors.lightblack,
  },
});
