import React from "react";
import { useColorScheme } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoList from "../screens/Home/TodoList";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";

const HomeStack = createNativeStackNavigator(); // Stack navigator that will house our ToDo screen

const darkMode = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    text: "rgb(30, 30, 30)",
    background: "#1E1E1E",
  },
};

const lightMode = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: "rgb(0, 0, 0)",
    background: "white",
  },
};

export default function HomeNavigator() {
  const colourScheme = useColorScheme();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="ToDo"
        component={TodoList}
        theme={colourScheme === "dark" ? darkMode : lightMode}
      />
    </HomeStack.Navigator>
  );
}
