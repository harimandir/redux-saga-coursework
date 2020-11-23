import { takeEvery, call, put, fork } from "redux-saga/effects";
import * as actions from "../actions/users";
import * as api from "../api/users";

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

function* getUsers() {
  try {
    const response = yield call(api.getUsers);
    yield put(actions.Types.GET_USERS_SUCCESS, response.data.data);
  } catch (e) {}
}

export const usersSagas = [fork(watchGetUsersRequest)];
