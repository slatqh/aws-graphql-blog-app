import React from "react";
import { Text } from "react-native";
import Colors from "../../const/Colors";

const TextCustom = ({
  size,
  fontFamily,
  title,
  color,
  styles,
  purple,
  black
}) => (
  <Text
    style={[
      {
        letterSpacing: 1,
        fontSize: size || 12,
        // fontFamily: fontFamily || 'montserrat',
        color: purple ? Colors.purple : black ? "black" : Colors.grey
      },
      styles
    ]}
  >
    {title}
  </Text>
);

export default TextCustom;
