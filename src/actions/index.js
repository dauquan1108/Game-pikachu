import * as types from "../constants/ActionTypes";

export const ON_ITEM_BUTTON_CLICK = (list, arr, index, item, indexItem) => {
  return {
    type: types.ITEM_BUTTON_CLICK,
    payload: {
      list,
      arr,
      index,
      item,
      indexItem,
    },
  };
};
