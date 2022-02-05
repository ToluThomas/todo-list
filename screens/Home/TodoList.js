import React, { useEffect, useRef, useState } from "react";
import { View, Text, FlatList } from "react-native";
import HeaderPlusButton from "../../components/HeaderPlusButton";
import TodoListItem from "../../components/TodoListItem";
import { homeStyles } from "../../constants/styles";

export default function TodoList({ navigation, ...props }) {
  const [todoItems, setTodoItems] = useState([]);
  const lastItemRef = useRef();

  useEffect(() => {
    lastItemRef?.current?.focus(); // Focus on the last ToDo item
  }, [todoItems.length]); // When ToDo list gets updated, update the ref of the last ToDo item

  function onChangeTodoListItemText(index, newValue) {
    setTodoItems((oldTodoItems) =>
      oldTodoItems.map((item, itemIndex) =>
        itemIndex === index ? newValue : item
      )
    );
  }

  function popTodoItemFromList(index) {
    setTodoItems((oldTodoItems) =>
      oldTodoItems.filter((item, itemIndex) => itemIndex !== index)
    );
  }

  function onKeyPress(nativeEvent, item, index) {
    if (nativeEvent?.key === "Backspace" && item === "") {
      popTodoItemFromList(index);
    }
  }

  function _renderItem({ item, index }) {
    return (
      <TodoListItem
        reference={index === todoItems.length - 1 ? lastItemRef : undefined}
        index={index}
        text={item}
        onChangeText={onChangeTodoListItemText}
        onKeyPress={({ nativeEvent }) => onKeyPress(nativeEvent, item, index)}
      />
    );
  }

  function newTodoListItem() {
    setTodoItems((oldTodoItems) => [...oldTodoItems, ""]);
  }

  function emptyListItem() {
    return (
      <Text style={homeStyles.emptyTodoListItem}>
        You don't have any ToDo's yet. Tap "+" to create a new ToDo
      </Text>
    );
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderPlusButton onPress={newTodoListItem} />,
    });
  }, []); //  Set back button when the component mounts

  return (
    <View style={homeStyles.todoList}>
      <FlatList
        data={todoItems}
        renderItem={_renderItem}
        ListEmptyComponent={emptyListItem}
      />
    </View>
  );
}
