import React from 'react';
import API, { graphqlOperation } from '@aws-amplify/api';
import { Loading, ShowError } from '../components';

export function withContent(WrappedComponent, Query) {
  return class Wrapper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
        handleClick: false,
        noContent: false,
        loading: false,
        error: false,
      };
    }

    componentDidMount() {
      this.loadDataFromServer();
    }

    loadDataFromServer = async () => {
      const { id, action } = this.props;
      try {
        this.setState({ loading: true });
        const { data } = await API.graphql(
          graphqlOperation(Query, { id })
        ).catch(err => console.log(`Problem with ${action}`, err));
        if (data) {
          this.setState({ data });
          this.setState({ loading: false });
        }
      } catch (error) {
        console.log(error);
        this.setState({ error: true });
      }
    };

    render() {
      const { data, noContent, error } = this.state;
      console.log(data);
      const { props } = this.props;
      if (error) {
        return <ShowError />;
      }
      if (!data) {
        return <Loading />;
      }
      return <WrappedComponent data={data} {...props} noContent={noContent} />;
    }
  };
}
