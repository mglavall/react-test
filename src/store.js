import { combineReducers, createStore } from "redux";
import cardReducer from "./store/reducers/cardReducer";

const rootReducer = combineReducers({ cardReducer: cardReducer });
const store = createStore(rootReducer);
export default store;
