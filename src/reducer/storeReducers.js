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
      visible: true,
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
    case "ITEM_BUTTON_CLICK":
      const { list, firstItem } = state;
      const { item } = action.payload;
      if (firstItem === null) {
        return { ...state, firstItem: item };
      } else {
        if (
          firstItem.item.id === item.item.id &&
          checkAll(list, firstItem, item)
        ) {
          list[firstItem.x][firstItem.y].visible = false;
          list[item.x][item.y].visible = false;
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

function checkAll(list, firstItem, secondItem) {
  if (firstItem.x === secondItem.x && firstItem.y === secondItem.y) {
    return false;
  }
  if (firstItem.x === secondItem.x) {
    return checkLineX(list, firstItem, secondItem);
  }
  if (firstItem.y === secondItem.y) {
    return checkLineY(list, firstItem, secondItem);
  }

  return (
    checkRectX(list, firstItem, secondItem) ||
    checkRectY(list, firstItem, secondItem)
    // ||    checkMoreLineX(list, firstItem, secondItem)
  );
}

// cot  ( chung x )
function checkLineX(list, firstItem, secondItem) {
  let min = Math.min(firstItem.y, secondItem.y);
  let max = Math.max(firstItem.y, secondItem.y);

  for (let i = min + 1; i < max; i++) {
    if (list[firstItem.x][i].visible === true) {
      return false;
    }
  }
  return true;
}

// hang  ( chung y )
function checkLineY(list, firstItem, secondItem) {
  let min = Math.min(firstItem.x, secondItem.x);
  let max = Math.max(firstItem.x, secondItem.x);

  for (let i = min + 1; i < max; i++) {
    if (list[i][secondItem.y].visible === true) {
      return false;
    }
  }
  return true;
}

// ăn theo chữ z
function checkRectX(list, firstItem, secondItem) {
  let pMinY = firstItem;
  let pMaxY = secondItem;
  if (firstItem.y > secondItem.y) {
    pMinY = secondItem;
    pMaxY = firstItem;
  }

  for (let y = pMinY.y + 1; y < pMaxY.y; y++) {
    if (list[pMinY.x][y].visible !== false) {
      return false;
    }
    if (
      list[pMaxY.x][y].visible === false &&
      checkLineY(list, firstItem, secondItem) &&
      checkLineX(list, firstItem, secondItem)
    ) {
    }
    // if (
    //   checkLineX(list, firstItem, secondItem) &&
    //   checkLineY(list, firstItem, secondItem) &&
    //   checkLineX(list, firstItem, secondItem)
    // ) {
    //   return true;
    // }
  }
  return false;
}
// ăn theo chữ z
function checkRectY(list, firstItem, secondItem) {
  let pMinX = firstItem;
  let pMaxX = secondItem;
  if (firstItem.x > secondItem.x) {
    pMinX = secondItem;
    pMaxX = firstItem;
  }
  for (let x = pMinX.x + 1; x < pMaxX.x; x++) {
    if (list[x][pMinX.y].visible !== false) {
      return false;
    }
    if (
      // checkLineY(list, firstItem, secondItem)
      list[x][pMaxX.y].visible === false &&
      checkLineX(list, firstItem, secondItem) &&
      checkLineY(list, firstItem, secondItem)
    ) {
    }
  }
  // if (!(firstItem.item.id === secondItem.item.id)) {
  //   return false;
  // }
  // for (let x = pMinX.x + 1; x < pMaxX.x; x++) {
  //   if (
  //     checkLineY(list, firstItem, secondItem) &&
  //     checkLineX(list, firstItem, secondItem) &&
  //     checkLineY(list, firstItem, secondItem)
  //   ) {
  //     return true;
  //   }
  // }
  return false;
}
// function checkMoreLineX(list, firstItem, secondItem) {
//   let pMinY = firstItem;
//   let pMaxY = secondItem;
//   console.log({ pMinY }, { pMaxY });
//   if (firstItem.y > secondItem.y) {
//     pMinY = secondItem;
//     pMaxY = firstItem;
//   }
//   let y = pMaxY.y;
//   let row = pMinY.x;
//   // if (type === -1) {
//   //   y = pMinY.y;
//   //   row = pMaxY.x;
//   // }
//   if (checkLineX(list, pMinY.y, pMaxY.y, row, firstItem, secondItem)) {
//     while (list[pMinY.x][y].visible && list[pMaxY.x][y].visible) {
//       if (checkLineY(list, pMinY.x, pMaxY.x, y, firstItem, secondItem)) {
//         return true;
//       }
//       // y += type;
//       if (!list[pMinY.x][y]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// function checkTwoPoint(list, firstItem, item) {
//   //check line with x
//   if (firstItem.x === item.x) {
//     if (checkLineX(list, firstItem.y, item.y, item.x, firstItem, item)) {
//       return true;
//     }
//   }
//   //check line with y
//   if (firstItem.y === item.y) {
//     if (checkLineY(list, firstItem.x, item.x, item.y, firstItem, item)) {
//       return true;
//     }
//   }
//   let type = -1;
//   if ((type = checkRectX(list, firstItem, item) !== -1)) {
//     return true;
//   }
//   if ((type = checkRectY(list, firstItem, item) !== -1)) {
//     return true;
//   }
//   if ((type = checkMoreLineX(list, firstItem, item, 1)) !== 1) {
//     return true;
//   }
// }
export default StoreReducers;
