import React from 'react';
import { Button } from 'react-native';

export function ModalScreen(WrappedComponent, props) {
  return class Modal extends React.Component {
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
      return <WrappedComponent {...props} />;
    }
  };
}
