import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { usersReducer } from "./users";
import { rootSaga } from "../sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({
    users: usersReducer,
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
