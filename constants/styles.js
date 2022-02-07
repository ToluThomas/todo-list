import { StyleSheet } from "react-native";
import { scale, verticalScale } from "../utils/scale";

/**
 * Styles for the home screen
 */
export const homeStyles = StyleSheet.create({
  headerButtonRight: {
    width: scale(30),
    height: verticalScale(30),
  },
  headerButtonRightText: {
    fontSize: scale(25),
  },
  todoList: {
    backgroundColor: "white",
    height: "100%",
    padding: verticalScale(10),
  },
  todoListItem: {
    flexDirection: "row",
    alignItems: 'center',
    marginBottom: scale(5),
  },
  todoListItemText: {
    width: scale(320),
    marginLeft: scale(10),
  },
  emptyTodoListItem: { textAlign: "center" },
});

/**
 * Styles for the ToDo checkbox
 */
export const checkboxStyles = StyleSheet.create({
  circleOutline: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: scale(30),
  },
  tickIcon: {
    fontSize: scale(14),
    textAlign: "center",
    // paddingTop: scale(2),
  },
  tickIconBackground: {
    backgroundColor: "white",
  },
});
