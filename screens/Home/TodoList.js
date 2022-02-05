import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import HeaderPlusButton from "../../components/HeaderPlusButton";
import TodoListItem from "../../components/TodoListItem";
import { homeStyles } from "../../constants/styles";

export default function TodoList({ navigation, ...props }) {
  const [todoItems, setTodoItems] = useState([]);

  function onChangeTodoListItemText(index, newValue) {
    setTodoItems((oldTodoItems) =>
      oldTodoItems.map((item, itemIndex) =>
        itemIndex === index ? newValue : item
      )
    );
  }

  function _renderItem({ item, index }) {
    return (
      <TodoListItem
        index={index}
        text={item}
        onChangeText={onChangeTodoListItemText}
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
