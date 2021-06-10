import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";

const loggerMiddleware = createLogger();

export default (initialState) => {
  initialState = JSON.parse(window.localStorage.getItem('state')) || initialState;
  const middleware = [thunk, loggerMiddleware];
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );
  return store;
};
