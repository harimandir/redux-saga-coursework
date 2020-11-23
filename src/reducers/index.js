import { combineReducers } from "redux";
import { usersReducer } from "./users";

export const store = combineReducers({
  users: usersReducer,
});
