import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../../const/Colors';
import { Divider, PostAuthor, PostOptions } from '../../../components';

const PostDetails = props => {
  const { description, message, title } = props.data.getPost;
  const { images, username } = props;
  console.log('POSTDETAILS COMPONENT', username);
  return (
    <ScrollView
      contentContainerStyle={{ backgroundColor: Colors.milk }}
      bounces="none"
    >
      <View style={styles.container}>
        <View style={{ flex: 0.3, padding: 10 }}>
          <PostAuthor username={username} status="hardly looking">
            <PostOptions />
          </PostAuthor>
          <Text style={styles.title}>{title}</Text>
          <Divider style={{ marginHorizontal: 10 }} />
          <Text>{description}</Text>
          <Text>{message}</Text>
        </View>
        {images.length ? (
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

        <View style={styles.socialIcons}>
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
        <ScrollView
          contentContainerStyle={{ backgroundColor: Colors.milk, flex: 0.7 }}
        >
          {/* <View style={{ flex: 1, backgroundColor: Colors.blonde }}> */}
          {props.children}
          {/* </View> */}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default PostDetails;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    // flex: 1,
    borderRadius: 5,
    borderColor: Colors.grey,
    borderWidth: 1,
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: 14,
    letterSpacing: 1,
    color: Colors.black,
  },
  imageSection: {
    flex: 0.3,
    borderWidth: 1,
    borderColor: 'black',
    overflow: 'hidden',
  },
  socialIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
  },
  comments: {
    flex: 0.4,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
  },
});
