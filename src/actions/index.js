import * as types from "../constants/ActionTypes";

export const ON_ITEM_BUTTON_CLICK = (x, y, item, xItem1, yItem1, item1) => {
  return {
    type: types.ITEM_BUTTON_CLICK,
    payload: {
      x,
      y,
      item,
      xItem1,
      yItem1,
      item1,
    },
  };
};
