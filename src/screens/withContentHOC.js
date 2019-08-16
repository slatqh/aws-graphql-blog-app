import React from 'react';
import API, { graphqlOperation } from '@aws-amplify/api';

export function withContent(WrappedComponent, Query) {
  return class Wrapper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        handleClick: false,
        noContent: false,
      };
    }

    componentDidMount() {
      const { action } = this.props;
      switch (action) {
        case 'Load Posts':
          return this.getBlogPosts();
        case 'Load Comments':
          return this.getPostsComments();
        default:
          return this.getBlogs();
      }
    }

    getBlogs = async () => {
      this.setState({ loading: true });
      const { data } = await API.graphql(
        graphqlOperation(Query, this.props.options)
      ).catch(err => console.log('Problem to load Blogs', err));
      if (data) {
        this.setState({ data: data.listBlogs.items });
        this.setState({ loading: false });
      }
    };

    getBlogPosts = async () => {
      this.setState({ loading: true });
      const { data } = await API.graphql(
        graphqlOperation(Query, { id: this.props.options })
      ).catch(err => console.log('Problem to load BlogPosts', err));
      if (data.getBlog.posts.items.length > 0) {
        this.setState({ data: data.getBlog.posts.items });
        this.setState({ loading: false });
      } else {
        this.setState({ noContent: true });
      }
    };

    getPostsComments = async () => {
      this.setState({ loading: true });
      const { data } = await API.graphql(
        graphqlOperation(Query, { id: this.props.options })
      ).catch(err => console.log('Problem to load Posts comments', err));
      console.log('Comments', data);
      if (data.getPost.comments.items > 0) {
        this.setState({ data: data.getPost.comments.items });
        this.setState({ loading: false });
      } else {
        this.setState({ noContent: true });
      }
    };

    render() {
      const { data, noContent } = this.state;
      const { props } = this.props;
      return <WrappedComponent data={data} {...props} noContent={noContent} />;
    }
  };
}
