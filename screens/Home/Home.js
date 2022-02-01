import React from "react";
import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoList from "./TodoList";

const HomeStack = createNativeStackNavigator();

export default function Home() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="ToDo"
        component={TodoList}
        options={{
          headerRight: () => <Text>+</Text>,
        }}
      />
    </HomeStack.Navigator>
  );
}
