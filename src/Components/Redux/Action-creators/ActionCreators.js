import { ACTION_TYPES } from "../Action-types/ActionType";

export const addTodo = (payload) => {
  return {
    type: ACTION_TYPES.ADD_TODO,
    payload,
  };
};

export const delTodo = (payload) => {
  return {
    type: ACTION_TYPES.DEL_TODO,
    payload,
  };
};

export const handleEditSubmit = (payload) => {
  return {
    type: ACTION_TYPES.UPDATE_TODO,
    payload,
  };
};

export const handleCheckBox = (payload) => {
  return {
    type: ACTION_TYPES.CHECKBOX_TODO,
    payload,
  };
};
