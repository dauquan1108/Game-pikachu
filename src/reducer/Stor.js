import * as types from "../constants/ActionTypes";
let dataStor = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
];

const Stor = (state = dataStor, action) => {
  switch (action.type) {
    // case types.GET_LIST_VIEW_DATA_MAIN:
    //   state = action.dataStor;
    //   return [...state];
    default:
      return [...state];
  }
};

export default Stor;
