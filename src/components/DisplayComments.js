import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../const/Colors';
import { ShowEmtyContent } from './ShowEmtyContent';
import { Divider } from './Divider';
import { Avatar } from './Avatar';
import { SingleComent } from './SingleComent';
import { WriteComment } from './WriteComment';

const DisplayComments = props => {
  const { data, noContent, onPress, title } = props;
  if (noContent) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ShowEmtyContent text="No Comments. Create one!" />
      </View>
    );
  }
  return (
    <ScrollView contentContainerStyle={{ backgroundColor: Colors.milk }}>
      <View style={styles.container}>
        <View style={{ flex: 0.3 }}>
          <Avatar />
          <Text style={styles.title}>Post Title going here</Text>
          <Divider style={{ marginHorizontal: 10 }} />
          <Text style={{ padding: 10 }}>
            Adipisicing nostrud laboris eiusmod nulla elit proident ut in non eu
            sit. Adipisicing nostrud laboris eiusmod nulla elit proident ut in
            non eu sit. Adipisicing nostrud laboris eiusmod nulla elit proident
            ut in non eu sit.
          </Text>
        </View>
        <View style={styles.imageSection}>
          <Image
            // style={styles.backgroundImage}
            style={{
              width: null,
              height: 200,
              // overflow: 'visible',
              backgroundColor: Colors.white,
            }}
            source={require('../../assets/images/3.jpeg')}
            resizeMethod="scale"
          />
        </View>
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
        <View // commnets /  like / share
          style={styles.comments}
        />
        {/* Single Comment from server */}
        <SingleComent />
        <SingleComent />
        <SingleComent />
        <SingleComent />
        <SingleComent />
        <SingleComent />
        <SingleComent />
        <SingleComent />
        <SingleComent />
        <SingleComent />
        <SingleComent />
        <SingleComent />
        <SingleComent />
        <SingleComent />
        <SingleComent />
        <SingleComent />
        <SingleComent />
      </View>
      <WriteComment />
    </ScrollView>
  );
};

export default DisplayComments;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    marginTop: 60,
    borderRadius: 5,
    borderColor: Colors.grey,
    borderWidth: 1,
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: 14,
    letterSpacing: 1,
    color: Colors.black,
    padding: 10,
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
