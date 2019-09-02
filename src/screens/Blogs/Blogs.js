import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { listBlogs } from '../../graphql/queries';
import Wrapper from '../withContentHOC';
import Colors from '../../../const/Colors';

// const BlogContent = withContent(DisplayBlogs, listBlogs);
class Blogs extends React.Component {
  render() {
    return (
      <Wrapper query={listBlogs} action="Load Blogs">
        {({ data }) =>
          data.listBlogs.items.map(el => (
            <TouchableOpacity
              key={el.id}
              style={{ margin: 8, backgroundColor: Colors.teal }}
              onPress={() =>
                this.props.navigation.navigate('Posts', { id: el.id })
              }
            >
              <Text>{el.name}</Text>
            </TouchableOpacity>
          ))
        }
      </Wrapper>
    );
  }
}

export default Blogs;
