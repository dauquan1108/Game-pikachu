import { combineReducers } from "redux";

import StoreReducers from "./storeReducers";

const appPiKaChu = combineReducers({
  StoreReducers,
});
export default appPiKaChu;
