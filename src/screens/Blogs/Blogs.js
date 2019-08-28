import React from 'react';
import { View } from 'react-native';
import { listBlogs } from '../../graphql/queries';
import { withContent } from '../withContentHOC';
import { DisplayBlogs } from '../../components';

const BlogContent = withContent(DisplayBlogs, listBlogs);
class Blogs extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <BlogContent {...this.props} action="Load Blogs" />
      </View>
    );
  }
}

export default Blogs;
