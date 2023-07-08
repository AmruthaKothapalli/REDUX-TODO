import { combineReducers } from "redux";
import { TodoReducer } from "../TodoReducer/TodoReducer";

export const commonReducer = combineReducers({
  TodoReducer,
});
