import * as types from "../constants/ActionTypes";

export const ON_ITEM_BUTTON_CLICK = (item) => {
  return {
    type: types.ITEM_BUTTON_CLICK,
    payload: {
      item,
    },
  };
};
