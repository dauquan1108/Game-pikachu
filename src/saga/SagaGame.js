import * as types from "../constants/ActionTypes";

import { take } from "redux-saga/effects";

export function* watcherGetDataMain() {
  while (true) {
    const action = yield take(types.ITEM_BUTTON_CLICK);
    //console.log({ action });
  }
}
