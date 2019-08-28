import { View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import API, { graphqlOperation } from '@aws-amplify/api';
import Colors from '../../const/Colors';
import { createComment } from '../graphql/mutations';
import { createContent } from '../screens/postToServerHOC';

export const WriteComment = ({ onPress, data, id }) => {
  const [comment, setComment] = useState(null);
  console.log('PROPS FROM WRITE COMPONENT', data);

  // async function loadDataFromServer() {
  //   console.log('Post comment');
  //   try {
  //     // this.setState({ loading: true });
  //     const data = await API.graphql(
  //       graphqlOperation(createComment, { input: postComment })
  //     ).catch(err => console.log(`Problem with create comment`, err));
  //     if (data) {
  //       console.log(data);
  //       // this.setState({ data });
  //       // this.setState({ loading: false });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     // this.setState({ error: true });
  //   }
  // }
  return (
    <View
      style={{
        backgroundColor: Colors.milk,
        height: 50,
        borderRadius: 10,
        marginHorizontal: 10,
        paddingLeft: 10,
        paddingTop: 10,
        alingItems: 'flex-end',
      }}
    >
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          placeholder="Comment here"
          multiline
          style={{ flex: 0.9 }}
          onChangeText={e => setComment(e)}
        />
        <Button
          title="Post"
          onPress={() => onPress(comment)}
          style={{ alignSelf: 'flex-end', flex: 0.3 }}
        />
      </View>
    </View>
  );
};

// export const PostComment = createContent(WriteComment, createComment);
