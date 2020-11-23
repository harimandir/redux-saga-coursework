import { combineReducers } from "redux";
import { usersReducer } from "./users";

export const StoreState = combineReducers({
  users: usersReducer,
});
