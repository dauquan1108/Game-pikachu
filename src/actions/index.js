import * as types from "../constants/ActionTypes";

export const ON_ITEM_BUTTON_CLICK = (list, arr, x, item, y) => {
  return {
    type: types.ITEM_BUTTON_CLICK,
    payload: {
      list,
      arr,
      x,
      item,
      y,
    },
  };
};
