import React from "react";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  useColorScheme,
} from "react-native";
import { checkboxStyles } from "../constants/styles";

export default function Tick({ onPress }) {
  const theme = useColorScheme();

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={checkboxStyles(theme).tickIconBackground}>
        <Text style={checkboxStyles(theme).tickIcon}>✅</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
