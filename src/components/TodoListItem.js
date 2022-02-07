import React from "react";
import { TextInput, View, useColorScheme } from "react-native";
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
  ...props
}) {
  const theme = useColorScheme();
  return (
    <View style={homeStyles(theme).todoListItem} key={index}>
      {done ? (
        <Tick onPress={onTick} />
      ) : (
        <CircleOutline onPress={onTick} />
      )}
      <TextInput
        ref={reference}
        placeholder=""
        style={[homeStyles(theme).todoListItemText]}
        multiline
        onChangeText={(value) => onChangeText(index, value)}
        value={text}
        onKeyPress={onKeyPress}
      />
    </View>
  );
}
