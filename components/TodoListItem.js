import React from "react";
import { TextInput, View } from "react-native";
import { homeStyles } from "../constants/styles";
import CircleOutline from "./CircleOutline";

export default function TodoListItem({ index, text, onChangeText, onKeyPress }) {
  return (
    <View style={homeStyles.todoListItem} key={index}>
      <CircleOutline />
      <TextInput
        placeholder=""
        style={homeStyles.todoListItemText}
        multiline
        onChangeText={(value) => onChangeText(index, value)}
        value={text}
        onKeyPress={onKeyPress}
      />
    </View>
  );
}
