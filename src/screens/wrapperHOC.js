import React from 'react';
import API, { graphqlOperation } from '@aws-amplify/api';

export function withSubscription(WrappedComponent, blogQuery, postsQuery) {
  return class Wrapper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };
    }

    componentDidMount() {
      this.getBlogs();
    }

    getBlogs = async () => {
      this.setState({ loading: true });
      const { data } = await API.graphql(graphqlOperation(blogQuery));
      if (data) {
        this.setState({ data: data.listBlogs.items });
        this.setState({ loading: false });
      }
    };

    getPost = async id => {
      this.setState({ loading: true });
      const { data } = await API.graphql(graphqlOperation(postsQuery, { id }));
      if (data) {
        this.setState({ data: data.getBlog.posts.items });
        this.setState({ loading: false });
      }
    };

    handleClick(id, name) {
      this.getPost(id);
      // this.setState({ data: Posts });
    }

    render() {
      const { data } = this.state;
      const { props } = this.props;
      return (
        <WrappedComponent
          data={data}
          {...props}
          // clickEvent={(id, name) => this.handleClick(id, name)}
        />
      );
    }
  };
}
