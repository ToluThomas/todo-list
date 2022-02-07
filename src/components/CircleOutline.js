import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { checkboxStyles } from "../constants/styles";
import { scale } from "../utils/scale";

export default function CircleOutline({
  radius = 20,
  outlineColour = "grey",
  children,
  style = {},
  ...props
}) {
  return (
    <TouchableWithoutFeedback {...props}>
      <View
        style={[
          checkboxStyles.circleOutline,
          {
            width: scale(radius),
            height: scale(radius),
            borderColor: outlineColour,
          },
          style,
        ]}
      />
    </TouchableWithoutFeedback>
  );
}
