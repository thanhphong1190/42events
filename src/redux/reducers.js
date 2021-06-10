import { combineReducers } from "redux";
import masterReducer from "./master/reducer";

export default combineReducers({
  master: masterReducer,
});
