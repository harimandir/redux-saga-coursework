import { takeEvery, call, put, fork } from "redux-saga/effects";
import * as actions from "../actions/users";
import * as api from "../api/users";

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

function* getUsers() {
  try {
    const response = yield call(api.getUsers);
    yield put(actions.getUsersSuccess(response.data.data));
  } catch (e) {
    console.error(e);
  }
}

export const usersSagas = [fork(watchGetUsersRequest)];
