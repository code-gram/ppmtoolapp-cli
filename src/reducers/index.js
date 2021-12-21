import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import projectRecuder from "./projectRecuder";

export default combineReducers({
  errors: errorReducer,
  projects: projectRecuder,
});
