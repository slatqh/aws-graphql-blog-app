import { Text } from 'react-native';
import React, { useState } from 'react';
import API, { graphqlOperation } from '@aws-amplify/api';

const CreateContent = props => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  function postDataToServer(comment, id, query) {
    console.log('postDataToServer', comment, id);
    setLoading(true);
    const newComment = {
      commentPostId: id,
      content: comment,
    };
    try {
      API.graphql(graphqlOperation(query, { input: newComment }), () => {
        console.log('Comment Submitees');
      }).catch(err => console.log(`Problem with create comment`, err));
      setLoading(false);
      return props.callback;
    } catch (err) {
      setError(true);
      console.log(err);
    }
  }

  if (isLoading) {
    return <Text>Loading</Text>;
  }
  if (error) {
    return <Text>Some error</Text>;
  }
  return props.children(postDataToServer, isLoading);
};

export default CreateContent;
