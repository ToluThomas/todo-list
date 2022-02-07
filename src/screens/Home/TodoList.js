import React, { useEffect, useRef } from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import HeaderPlusButton from "../../components/HeaderPlusButton";
import TodoListItem from "../../components/TodoListItem";
import { homeStyles } from "../../constants/styles";
import {
  createNewTodoListItem,
  updateTodoListItemText,
  deleteTodoListItem,
  toggleTodoListItemDone,
} from "../../redux/actionCreators/todoActions";

function TodoList({ navigation, ...props }) {
  // const [todoItems, setTodoItems] = useState([]);
  const lastItemRef = useRef();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderPlusButton onPress={props.createNewTodoListItem} />
      ),
    });
  }, []); //  Set back button when the component mounts

  useEffect(() => {
    lastItemRef?.current?.focus(); // Focus on the last ToDo item
  }, [props.todoListItems.length]); // When ToDo list gets updated, update the ref of the last ToDo item

  // function newTodoListItem() {
  //   setTodoItems((oldTodoItems) => [
  //     ...oldTodoItems,
  //     { text: "", done: false },
  //   ]);
  // }

  // function onChangeTodoListItemText(index, newValue) {
  //   setTodoItems((oldTodoItems) => [
  //     ...oldTodoItems.slice(0, index),
  //     // Remove new line from ToDo list item and insert new ToDo object
  //     { text: newValue.replace(/\r?\n|\r/g, ""), done: todoItems[index].done },
  //     ...oldTodoItems.slice(index + 1),
  //   ]);
  // }

  // Remove a ToDo list item from the list of ToDo's
  // function popTodoItemFromList(index) {
  //   setTodoItems((oldTodoItems) =>
  //     oldTodoItems.filter((item, itemIndex) => itemIndex !== index)
  //   );
  // }

  // Listen for when certain keys are pressed
  function onKeyPress(nativeEvent, text, index) {
    if (nativeEvent?.key === "Backspace" && text === "") {
      // popTodoItemFromList(index);
      props.deleteTodoListItem(index);
    }

    // Show new ToDo item when user taps the enter/return key
    if (nativeEvent?.key === "Enter") {
      props.createNewTodoListItem();
    }
  }

  // Handle tick and untick presses
  // function onTick(index) {
  //   setTodoItems((oldTodoItems) =>
  //     oldTodoItems.map((item, itemIndex) =>
  //       itemIndex === index
  //         ? { ...oldTodoItems[index], done: !oldTodoItems[index].done }
  //         : item
  //     )
  //   );
  // }

  // Render a ToDo list item
  function _renderItem({ item, index }) {
    let { text, done } = item; // Destructure what's needed from the item
    return (
      <TodoListItem
        reference={
          index === props.todoListItems.length - 1 ? lastItemRef : undefined
        } //  Pass ref only if item is the last item
        index={index}
        text={text}
        done={done}
        onChangeText={props.updateTodoListItemText}
        onKeyPress={({ nativeEvent }) =>
          onKeyPress(nativeEvent, item.text, index)
        }
        onTick={() => props.toggleTodoListItemDone(index)}
      />
    );
  }

  //  When there are no items in the list, show an empty state
  function emptyListItem() {
    return (
      <Text style={homeStyles.emptyTodoListItem}>
        You don't have any ToDo's yet. Tap "+" to create a new ToDo
      </Text>
    );
  }

  return (
    <View style={homeStyles.todoList}>
      <FlatList
        data={props.todoListItems}
        renderItem={_renderItem}
        ListEmptyComponent={emptyListItem}
      />
    </View>
  );
}

function mapStateToProps(state) {
  return { todoListItems: state.todoListItems };
}

const mapDispatchToProps = {
  createNewTodoListItem,
  updateTodoListItemText,
  deleteTodoListItem,
  toggleTodoListItemDone,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
