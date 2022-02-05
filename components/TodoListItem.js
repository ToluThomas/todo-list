import React from "react";
import { TextInput, View } from "react-native";
import { homeStyles } from "../constants/styles";
import CircleOutline from "./CircleOutline";
import Tick from "./Tick";

export default function TodoListItem({
  index,
  text,
  onChangeText,
  onKeyPress,
  reference,
  done = false,
  onTick = () => {},
}) {
  return (
    <View style={homeStyles.todoListItem} key={index}>
      {done ? (
        <Tick onPress={onTick} />
      ) : (
        <CircleOutline
          onPress={onTick}
        />
      )}
      <TextInput
        ref={reference}
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
