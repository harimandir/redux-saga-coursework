import axios from "axios";
import { takeEvery, call, put } from "redux-saga/effects";
import * as actions from "../actions/users";

export function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

function* getUsers() {
  try {
    const response = yield call(axios.get, "/users");
    yield put(actions.Types.GET_USERS_SUCCESS, response.data.data);
  } catch (e) {}
}
