import React, { useEffect } from 'react';
import { View } from 'react-native';
import { listBlogs } from '../../graphql/queries';
import { withContent } from '../withContentHOC';
import { DisplayBlogs } from '../../components';

const BlogContent = withContent(DisplayBlogs, listBlogs);
class Home extends React.Component {
  render() {
    return (
      <View style={{}}>
        <BlogContent props={this.props} />
      </View>
    );
  }
}

export default Home;
