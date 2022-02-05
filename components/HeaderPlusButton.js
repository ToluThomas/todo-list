import React from "react";
import { TouchableWithoutFeedback, Text } from "react-native";
import { homeStyles } from "../constants/styles";
import { scale, verticalScale } from "../utils/scale";

export default function HeaderPlusButton({
  style = homeStyles.headerButtonRight,
  textStyle = homeStyles.headerButtonRightText,
  ...props
}) {
  return (
    <TouchableWithoutFeedback
      style={style}
      hitSlop={{
        top: verticalScale(30),
        bottom: verticalScale(30),
        left: scale(30),
        right: scale(30),
      }}
      {...props}
    >
      <Text style={textStyle}>+</Text>
    </TouchableWithoutFeedback>
  );
}
