import { createStore } from "redux";
import { commonReducer } from "../reducer/CommonReducer";

export const store = createStore(
  commonReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
