import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";

import travelReducer from "./features/travel/travelSlice";

const rootReducer = combineReducers({
  travel: travelReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
