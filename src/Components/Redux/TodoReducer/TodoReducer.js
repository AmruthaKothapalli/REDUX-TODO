import { ACTION_TYPES } from "../Action-types/ActionType";

const initialState = [
  { id: 1, todo: "wake up early in the morning", completed: false },
  { id: 2, todo: "make coffee", completed: false },
  { id: 3, todo: "Do break fast", completed: true },
];
export const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
      return [...state, action.payload];

    case ACTION_TYPES.DEL_TODO:
      const filteredTodos = state.filter((todo) => todo.id !== action.payload);
      return filteredTodos;

    case ACTION_TYPES.UPDATE_TODO:
      let data = action.payload;
      const updatedArray = [];
      state.map((item) => {
        if (item.id === data.id) {
          item.id = data.id;
          item.todo = data.todo;
          item.completed = data.completed;
        }
        updatedArray.push(item);
      });
      return updatedArray;

    case ACTION_TYPES.CHECKBOX_TODO:
      let todoArray = [];
      state.map((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
        todoArray.push(item);
      });
      return todoArray;

    default:
      return state;
  }
};
