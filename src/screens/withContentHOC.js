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

    // shouldComponentUpdate(prevState, nextProps) {
    //   console.log(prevState, nextProps);
    //   if (prevState.comment !== nextProps.comment) {
    //     return true;
    //   }
    //   return true;
    // }

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
          if (this.props.reload) {
            return this.props.reload(this.loadDataFromServer);
          }
        }
      } catch (error) {
        console.log(error);
        this.setState({ error: true });
      }
    };

    render() {
      console.log('FETCH DATA');
      const { data, noContent, error } = this.state;
      if (error) {
        return <ShowError />;
      }
      if (!data) {
        return <Loading />;
      }
      return <WrappedComponent data={data} {...this.props} />;
    }
  };
}
