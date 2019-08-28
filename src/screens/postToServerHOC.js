import { Text } from 'react-native';
import React from 'react';
import API, { graphqlOperation } from '@aws-amplify/api';

export const createContent = (WrapperComponent, Query) =>
  class CreateContent extends React.Component {
    state = {
      loading: false,
      data: null,
    };

    async postDataToServer(comment) {
      const newComment = {
        commentPostId: this.props.id,
        content: comment,
      };
      try {
        this.setState({ loading: true });
        const data = await API.graphql(
          graphqlOperation(Query, { input: newComment })
        ).catch(err => console.log(`Problem with create comment`, err));
        if (data) {
          console.log(data);
          this.setState({ data });
          this.setState({ loading: false });
        }
      } catch (error) {
        console.log(error);
        this.setState({ error: true });
      }
    }

    render() {
      if (this.state.loading) {
        return <Text>Loading</Text>;
      }
      return (
        <WrapperComponent
          onPress={comment => this.postDataToServer(comment)}
          data="some data"
          {...this.props}
        />
      );
    }
  };
