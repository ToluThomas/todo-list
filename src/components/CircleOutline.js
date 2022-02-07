import React from "react";
import { TouchableWithoutFeedback, View, useColorScheme } from "react-native";
import { checkboxStyles } from "../constants/styles";
import { scale } from "../utils/scale";

export default function CircleOutline({
  radius = 20,
  children,
  style = {},
  ...props
}) {
  const theme = useColorScheme();

  return (
    <TouchableWithoutFeedback {...props}>
      <View
        style={[
          checkboxStyles(theme).circleOutline,
          {
            width: scale(radius),
            height: scale(radius),
          },
          style,
        ]}
      />
    </TouchableWithoutFeedback>
  );
}
