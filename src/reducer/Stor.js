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

const dataStor = [
  { id: 0, img: a1, check: false },
  { id: 1, img: a2, check: false },
  { id: 2, img: a3, check: false },
  { id: 3, img: a4, check: false },
  { id: 4, img: a5, check: false },
  { id: 5, img: a6, check: false },
  { id: 6, img: a7, check: false },
  { id: 7, img: a8, check: false },
  { id: 8, img: a9, check: false },
  { id: 9, img: a10, check: false },
  { id: 10, img: a11, check: false },
  { id: 11, img: a12, check: false },
  { id: 12, img: a13, check: false },
  { id: 13, img: a14, check: false },
  { id: 14, img: a15, check: false },
  { id: 15, img: a16, check: false },
  { id: 16, img: a17, check: false },
  { id: 17, img: a18, check: false },
];

const cols = 12;
const rows = 6;
const limit = 4;

const setState = (initialState) => {
  for (let i = 0; i < cols; i++) {
    const rand = Math.floor(Math.random() * dataStor.length);
    const item = dataStor[rand];
    initialState.push({
      id: item.id,
      img: item.img,
      status: item.status,
    });
    item.check++;
    if (item.check === limit) {
      dataStor.splice(rand, 1);
    }
  }
  return initialState;
};

const setStateTwo = (initialStateTwo) => {
  for (let i = 0; i < rows; i++) {
    const array = setState([]);
    initialStateTwo.push(array);
  }
  return initialStateTwo;
};

const newState = setStateTwo([]);

const Stor = (state = newState, action) => {
  switch (action.type) {
    case types.ITEM_BUTTON_CLICK:
      const id = action.payload.item.id;
      console.log({ id });
      return [...state];
    default:
      return [...state];
  }
};

export default Stor;
