import React from 'react';
import { Button } from 'react-native';
import { CreatePost } from '../components';

export default class ModalScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerRight: (
        <Button onPress={() => navigation.navigate('Modal')} title="Cancel" />
      ),
      /* the rest of this config is unchanged */
    };
  };

  render() {
    console.log('ModalScreen', this.props);
    return <CreatePost navigation={this.props.navigation} />;
  }
}
