import React from "react";
import { ActivityIndicator } from "react-native";
import { Overlay } from "react-native-elements";
import Colors from "../../const/Colors";

export const LoadingStatus = ({ loading }) => (
  <Overlay
    fullscreen
    width="auto"
    height="auto"
    // overlayBackgroundColor='white'
    overlayStyle={{
      backgroundColor: "transparent",
      flex: 1,
      justifyContent: "center"
    }}
    isVisible={loading}
  >
    <ActivityIndicator size="small" color={Colors.black} />
    {/* <View style={{ alignItems: 'center', justifyContent: 'center' }}>
    </View> */}
  </Overlay>
);
