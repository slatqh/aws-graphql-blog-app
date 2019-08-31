import { Text } from 'react-native';
import React, { useState } from 'react';
import API, { graphqlOperation } from '@aws-amplify/api';
import * as subscriptions from '../graphql/subscriptions';

const CreateContent = props => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  async function postDataToServer(comment, id, query) {
    console.log('postDataToServer', comment, id);
    setLoading(true);
    const newComment = {
      commentPostId: id,
      content: comment,
    };
    try {
      const { data } = await API.graphql(
        graphqlOperation(query, { input: newComment })
        // subscription();
      ).catch(err => console.log(`Problem with create comment`, err));
      console.log('Comment submited', data);
      if (props.comments) {
        return props.comments({
          id: data.createComment.id,
          content: data.createComment.content,
        });
      }
      setLoading(false);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  }

  // const subscription = API.graphql(
  //   graphqlOperation(subscriptions.onCreateComment)
  // ).subscribe({
  //   next: ({ value }) => console.log(value),
  // });

  // Stop receiving data updates from the subscription
  // subscription.unsubscribe();

  // if (isLoading) {
  //   return <Text>Loading</Text>;
  // }
  if (error) {
    return <Text>Some error</Text>;
  }
  return props.children(postDataToServer, isLoading);
};

export default CreateContent;
