import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { reducers } from "../store/reducers";
import { rootSaga } from "./sagas";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
