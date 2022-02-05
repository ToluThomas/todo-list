import React from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { checkboxStyles } from "../constants/styles";

export default function Tick({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={checkboxStyles.tickIconBackground}>
        <Text style={checkboxStyles.tickIcon}>✅</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
