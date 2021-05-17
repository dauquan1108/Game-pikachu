import * as types from "../constants/ActionTypes";
let dataMain = [{ id: 1, type: "Dau Xuan Quan" }];

const Stor = (state = dataMain, action) => {
  switch (action.type) {
    case types.GET_LIST_VIEW_DATA_MAIN:
      state = action.dataMain;
      console.log({ state });
      return [...state];
    default:
      return [...state];
  }
};

export default Stor;
