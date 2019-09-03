import React from 'react';
import { ActivityIndicator, View, Button } from 'react-native';
import API, { graphqlOperation } from '@aws-amplify/api';
import { Loading, ShowError } from '../components';
import { listBlogs } from '../graphql/queries';

export default class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: false,
      error: false,
      reload: false,
    };
  }

  componentDidMount() {
    this.loadDataFromServer();
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.comment !== this.props.comment) {
  //     this.loadDataFromServer();
  //   }
  // }

  loadDataFromServer = async () => {
    const { id, action } = this.props;
    try {
      this.setState({ loading: true });
      const data = await API.graphql(
        graphqlOperation(this.props.query, { id })
      ).catch(err => console.log(`Problem with ${action}`, err));
      if (data) {
        this.setState({ data });
        this.setState({ loading: false });
      }
    } catch (error) {
      console.log(error);
      this.setState({ error: true, loading: false });
    }
  };

  render() {
    console.log('FETCH DATA', this.state.data);
    const { data, error, loading } = this.state;
    if (loading) {
      return <ActivityIndicator size="large" />;
    }
    if (error) {
      return <ShowError />;
    }
    if (!data) {
      return <Loading />;
    }
    return this.props.children(data, loading);
  }
}
