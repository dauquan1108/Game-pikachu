import { combineReducers } from "redux";

import Stor from "./Stor";

const appPiKaChu = combineReducers({
  Stor: Stor,
});
export default appPiKaChu;
