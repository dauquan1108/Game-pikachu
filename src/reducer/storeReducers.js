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
  { id: 0, img: a1, check: 0 },
  { id: 1, img: a2, check: 0 },
  { id: 2, img: a3, check: 0 },
  { id: 3, img: a4, check: 0 },
  { id: 4, img: a5, check: 0 },
  { id: 5, img: a6, check: 0 },
  { id: 6, img: a7, check: 0 },
  { id: 7, img: a8, check: 0 },
  { id: 8, img: a9, check: 0 },
  { id: 9, img: a10, check: 0 },
  { id: 10, img: a11, check: 0 },
  { id: 11, img: a12, check: 0 },
  { id: 12, img: a13, check: 0 },
  { id: 13, img: a14, check: 0 },
  { id: 14, img: a15, check: 0 },
  { id: 15, img: a16, check: 0 },
  { id: 16, img: a17, check: 0 },
  { id: 17, img: a18, check: 0 },
];
const cols = 12;
const rows = 6;
const limit = 4;

const setState = (initialState) => {
  for (let i = 0; i < cols; i++) {
    // lay ngau nhien 1 so nguyen trong mang
    const rand = Math.floor(Math.random() * dataStor.length);
    //
    const item = dataStor[rand];
    initialState.push({
      id: item.id,
      img: item.img,
      status: false,
    });
    //kiem tra mang phan tu do da = voi so luong mac dinh (4) chua neu roi thi xoa di phan tu do roi tiep den phan tu khac
    item.check++;
    if (item.check === limit) {
      dataStor.splice(rand, 1);
    }
    //
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

const initState = {
  list: setStateTwo([]),
  firstItem: null,
};
const StoreReducers = (state = initState, action) => {
  switch (action.type) {
    case types.ITEM_BUTTON_CLICK:
      const { list, firstItem } = state;
      const { item } = action.payload;
      if (firstItem === null) {
        return { ...state, firstItem: item };
      } else {
        if (
          (firstItem.item.id === item.item.id &&
            item.x !== firstItem.x &&
            firstItem.y === item.y &&
            checkLineX(list, firstItem, item)) ||
          (firstItem.item.id === item.item.id &&
            item.y !== firstItem.y &&
            firstItem.x === item.x &&
            checkLineY(list, firstItem, item)) ||
          checkRectX(list, firstItem, item)
        ) {
          // Trương hợp ăn được sẽ vào đây
          list[firstItem.x][firstItem.y].status = true;
          list[item.x][item.y].status = true;
          return { ...state, firstItem: null };
        } else {
          // Không ăn được thì trả về rỗng
          return { ...state, firstItem: null };
        }
      }
    default:
      return { ...state };
  }
};

//  Ăn theo cột
function checkLineX(list, firstItem, item) {
  const y1 = firstItem.x;
  const y2 = item.x;
  const x = item.y;
  let min = Math.min(y1, y2);
  let max = Math.max(y1, y2);
  for (let i = min + 1; i < max; i++) {
    const test = list[x][i].status;
    console.log({ test });
    if (list[x][i].status === false) {
      return false;
    }
  }
  return true;
}
function checkLineY(list, firstItem, item) {
  const x1 = firstItem.y;
  const x2 = item.y;
  const y = item.x;
  let min = Math.min(x1, x2);
  let max = Math.max(x1, x2);
  for (let i = min + 1; i < max; i++) {
    const test = list[y][i].status;
    console.log({ test });
    if (list[y][i].status === false) {
      return false;
    }
  }
  return true;
}
function checkRectX(list, firstItem, item) {
  const pMinY = firstItem;
  const pMaxY = item;
  if (firstItem.x > item.x) {
    pMinY = item;
    pMaxY = firstItem;
  }
  // for (let i = pMinY.x + 1; i < pMaxY.x; i++) {
  //   if (
  //     checkLineX(firstItem.x, item.x, item.y) &&
  //     checkLineY(firstItem.y, item.y, item.x) &&
  //     checkLineX(item.x, pMinY.x, firstItem.x)
  //   ) {
  //     return true;
  //   }
  // }
  // return false;
}

export default StoreReducers;
