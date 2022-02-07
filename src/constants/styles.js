import { StyleSheet } from "react-native";
import { scale, verticalScale } from "../utils/scale";

/**
 * Styles for the home screen
 */
export const homeStyles = (colourScheme = "light") =>
  StyleSheet.create({
    headerButtonRight: {
      width: scale(30),
      height: verticalScale(30),
    },
    headerButtonRightText: {
      fontSize: scale(25),
      color: colourScheme === "dark" ? "#FFFFFF" : "#000000",
    },
    todoList: {
      backgroundColor: colourScheme === "dark" ? "#1E1E1E" : "#FFFFFF",
      height: "100%",
      padding: verticalScale(10),
    },
    todoListItem: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: scale(5),
    },
    todoListItemText: {
      width: scale(320),
      marginLeft: scale(10),
      color: colourScheme === "dark" ? "#FFFFFF" : "#000000",
    },
    emptyTodoListItem: { textAlign: "center" },
  });

/**
 * Styles for the ToDo checkbox
 */
export const checkboxStyles = (colourScheme = "light") =>
  StyleSheet.create({
    circleOutline: {
      backgroundColor: colourScheme === "dark" ? "#1E1E1E" : "#FFFFFF",
      borderWidth: 1,
      borderRadius: scale(30),
      borderColor: colourScheme === "dark" ? "#FFFFFF" : "#000000",
    },
    tickIcon: {
      fontSize: scale(14),
      textAlign: "center",
      // paddingTop: scale(2),
    },
    tickIconBackground: {
      backgroundColor: colourScheme === "dark" ? "#1E1E1E" : "#FFFFFF",
    },
  });
