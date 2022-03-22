import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";

const rootReducers = combineReducers({
  counter: counterReducer,
});

export default rootReducers;
