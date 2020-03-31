import { combineReducers, createStore } from "redux";
import { rootReducer, homeReducer } from "../reducers";

const reducers = combineReducers({
  rootReducer: rootReducer
});

const store = createStore(reducers);

export default store;
