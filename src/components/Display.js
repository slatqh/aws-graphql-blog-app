import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { getNameAndId } from '../screens/actions';
import Colors from '../../const/Colors';

const _DisplayContent = props => {
  useEffect(() => {}, [props.data]);
  console.log(this.props);
  return (
    <View
      style={{
        paddingVertical: 10,
        borderTopWidth: 10,
        borderTopColor: Colors.teal,
      }}
    >
      {props.data.length ? (
        props.data.map(el => (
          <TouchableOpacity
            onPress={() => props.getNameAndId(el.id, el.name)}
            key={el.id}
            style={{ paddingVertical: 5 }}
          >
            <Text>{el.name || el.title || el.context}</Text>
          </TouchableOpacity>
        ))
      ) : (
        <ActivityIndicator size="large" color={Colors.blue} />
      )}
    </View>
  );
};

export default connect(
  null,
  { getNameAndId }
)(_DisplayContent);
