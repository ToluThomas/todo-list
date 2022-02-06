import todoActionTypes from "../actionTypes/todoActionTypes";

const {
  CREATE_NEW_TODO_LIST_ITEM,
  UPDATE_TODO_LIST_ITEM_TEXT,
  DELETE_TODO_LIST_ITEM,
  TOGGLE_TODO_LIST_ITEM_DONE,
} = todoActionTypes;

const initialState = [];

export default function todoReducer(state = initialState, action) {
  let { index, newText } = action.data || {};
  switch (action.type) {
    case CREATE_NEW_TODO_LIST_ITEM:
      return [...state, { text: "", done: false }];
    case UPDATE_TODO_LIST_ITEM_TEXT:
      return [
        ...state.slice(0, index),
        // Remove new line from ToDo list item and insert new ToDo object
        {
          text: newText.replace(/\r?\n|\r/g, ""),
          done: state[index].done,
        },
        ...state.slice(index + 1),
      ];
    case DELETE_TODO_LIST_ITEM:
      return [...state.slice(0, index), ...state.slice(index + 1)];
    case TOGGLE_TODO_LIST_ITEM_DONE:
      return [
        ...state.slice(0, index),
        {
          text: state[index].text,
          done: !state[index].done,
        },
        ...state.slice(index + 1),
      ];
    default:
      return state;
  }
}
