import React from "react";
import { View } from "react-native";
import { checkboxStyles } from "../constants/styles";
import { scale } from "../utils/scale";

export default function CircleOutline({
  radius = 20,
  outlineColour = "grey",
  children,
  ...props
}) {
  return (
    <View
      style={[
        checkboxStyles.circleOutline,
        {
          width: scale(radius),
          height: scale(radius),
          borderColor: outlineColour,
        },
      ]}
    >
      {children}
    </View>
  );
}
