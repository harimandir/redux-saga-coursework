import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { reducers } from "../store/reducers";
import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
