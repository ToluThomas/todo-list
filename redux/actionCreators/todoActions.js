import todoActionTypes from "../actionTypes/todoActionTypes";

const {
  CREATE_NEW_TODO_LIST_ITEM,
  UPDATE_TODO_LIST_ITEM_TEXT,
  DELETE_TODO_LIST_ITEM,
  TOGGLE_TODO_LIST_ITEM_DONE,
} = todoActionTypes;

export const createNewTodoListItem = () => (dispatch) =>
  dispatch({ type: CREATE_NEW_TODO_LIST_ITEM });

export const updateTodoListItemText = (index, newText) => (dispatch) =>
  dispatch({
    type: UPDATE_TODO_LIST_ITEM_TEXT,
    data: {
      index,
      newText,
    },
  });

export const deleteTodoListItem = (index) => (dispatch) =>
  dispatch({ type: DELETE_TODO_LIST_ITEM, data: { index } });

export const toggleTodoListItemDone = (index) => (dispatch) =>
  dispatch({ type: TOGGLE_TODO_LIST_ITEM_DONE, data: { index } });
