import React from "react";
import { TouchableWithoutFeedback, Text, useColorScheme } from "react-native";
import { homeStyles } from "../constants/styles";
import { scale, verticalScale } from "../utils/scale";

export default function HeaderPlusButton({ style, textStyle, ...props }) {
  const theme = useColorScheme();

  return (
    <TouchableWithoutFeedback
      style={style || homeStyles(theme).headerButtonRight}
      hitSlop={{
        top: verticalScale(30),
        bottom: verticalScale(30),
        left: scale(30),
        right: scale(30),
      }}
      {...props}
    >
      <Text style={textStyle || homeStyles(theme).headerButtonRightText}>
        +
      </Text>
    </TouchableWithoutFeedback>
  );
}
