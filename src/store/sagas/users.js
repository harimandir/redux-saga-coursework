import { takeEvery, takeLatest, call, put, fork } from "redux-saga/effects";
import * as actions from "../actions/users";
import * as api from "../../api/users";

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

function* watchCreateUserRequest() {
  yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
}

function* createUser(action) {
  try {
    yield call(api.createUser, action.payload);
    yield call(getUsers);
  } catch (e) {
    console.error(e);
  }
}

export const usersSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateUserRequest),
];
