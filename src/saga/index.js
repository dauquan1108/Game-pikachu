import { all } from "redux-saga/effects";
import { watcherGetDataMain } from "./SagaGame";

export default function* mySaga() {
  yield all([watcherGetDataMain()]);
}
