import * as types from "../constants/ActionTypes";

export const ON_GET_LIST_VIEW_DATA_MAIN = (dataMain) => {
  return {
    type: types.GET_LIST_VIEW_DATA_MAIN,
    payload: {
      dataMain,
    },
  };
};
