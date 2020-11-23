import { all } from "redux-saga/effects";
import { usersSagas } from "./users";

export function* rootSaga() {
  yield all([...usersSagas]);
}
