import * as types from "../constants/ActionTypes";
import a1 from "../images/pokemon_1.png";
import a2 from "../images/pokemon_2.png";
import a3 from "../images/pokemon_3.png";
import a4 from "../images/pokemon_4.png";
import a5 from "../images/pokemon_5.png";
import a6 from "../images/pokemon_6.png";
import a7 from "../images/pokemon_7.png";
import a8 from "../images/pokemon_8.png";
import a9 from "../images/pokemon_9.png";
import a10 from "../images/pokemon_10.png";
import a11 from "../images/pokemon_11.png";
import a12 from "../images/pokemon_12.png";
import a13 from "../images/pokemon_13.png";
import a14 from "../images/pokemon_14.png";
import a15 from "../images/pokemon_15.png";
import a16 from "../images/pokemon_16.png";
import a17 from "../images/pokemon_17.png";
import a18 from "../images/pokemon_18.png";
import a19 from "../images/pokemon_19.png";
import a20 from "../images/pokemon_20.png";
import a21 from "../images/pokemon_21.png";
import a22 from "../images/pokemon_22.png";
import a23 from "../images/pokemon_23.png";
import a24 from "../images/pokemon_24.png";
import a25 from "../images/pokemon_25.png";
import a26 from "../images/pokemon_26.png";
import a27 from "../images/pokemon_27.png";
import a28 from "../images/pokemon_28.png";
import a29 from "../images/pokemon_29.png";
import a30 from "../images/pokemon_30.png";
import a31 from "../images/pokemon_31.png";
import a32 from "../images/pokemon_32.png";
import a33 from "../images/pokemon_33.png";
import a34 from "../images/pokemon_34.png";
import a35 from "../images/pokemon_35.png";
import a36 from "../images/pokemon_36.png";

let dataStor = [
  [
    { id: 1, img: a1, status: false },
    { id: 2, img: a2, status: false },
    { id: 3, img: a3, status: false },
    { id: 4, img: a4, status: false },
    { id: 5, img: a5, status: false },
    { id: 6, img: a6, status: false },
    { id: 7, img: a7, status: false },
    { id: 8, img: a8, status: false },
    { id: 9, img: a9, status: false },
    { id: 10, img: a10, status: false },
    { id: 11, img: a11, status: false },
    { id: 12, img: a12, status: false },
  ],
  [
    { id: 13, img: a13, status: false },
    { id: 14, img: a14, status: false },
    { id: 15, img: a15, status: false },
    { id: 16, img: a16, status: false },
    { id: 17, img: a17, status: false },
    { id: 18, img: a18, status: false },
    { id: 19, img: a19, status: false },
    { id: 20, img: a20, status: false },
    { id: 21, img: a21, status: false },
    { id: 22, img: a22, status: false },
    { id: 23, img: a23, status: false },
    { id: 34, img: a24, status: false },
  ],
  // [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  // [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  // [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  // [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
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
