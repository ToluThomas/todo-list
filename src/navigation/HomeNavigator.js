import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoList from "../screens/Home/TodoList";

const HomeStack = createNativeStackNavigator(); // Stack navigator that will house our ToDo screen

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="ToDo" component={TodoList} />
    </HomeStack.Navigator>
  );
}
