import * as types from "../constants/ActionTypes";

import { put, take, call } from "redux-saga/effects";

export function* watcherGetDataMain() {
  while (true) {
    yield take(types.GET_LIST_VIEW_DATA_MAIN);
  }
}
