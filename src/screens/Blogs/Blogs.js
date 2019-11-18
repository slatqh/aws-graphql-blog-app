import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { listBlogs } from '../../graphql/queries';
import Wrapper from '../withContentHOC';
import Colors from '../../../const/Colors';

// const BlogContent = withContent(DisplayBlogs, listBlogs);
class Blogs extends React.Component {
  search(input) {
    console.log(input);
  }

  render() {
    return (
      <View style={{ backgroundColor: Colors.blonde, flex: 1 }}>
        <TextInput
          placeholder="Search"
          onChangeText={e => this.search(e)}
          style={{
            borderColor: Colors.grey,
            margin: 5,
            borderWidth: 1,
            padding: 5,
          }}
        />
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
      </View>
    );
  }
}

export default Blogs;
