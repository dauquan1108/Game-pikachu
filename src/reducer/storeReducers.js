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
const cols = 14;
const rows = 8;
const limit = 4;

const nullRow = () => {
  let arr = [];
  for (let i = 0; i < cols; i++) {
    arr.push({
      id: -1,
      img: null,
      visible: false,
    });
  }
  return arr;
};

const setState = (initialState) => {
  for (let i = 0; i < cols; i++) {
    if (i === 0 || i === cols - 1) {
      initialState.push({
        id: -1,
        img: null,
        visible: false,
      });
    } else {
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
  }

  return initialState;
};

const setStateTwo = (initialStateTwo) => {
  for (let i = 0; i < rows; i++) {
    if (i === 0 || i === rows - 1) {
      initialStateTwo.push(nullRow());
    } else {
      const array = setState([]);
      initialStateTwo.push(array);
    }
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
  let x1 = firstItem.x;
  let y1 = firstItem.y;
  let x2 = secondItem.x;
  let y2 = secondItem.y;
  if (firstItem.x === secondItem.x && firstItem.y === secondItem.y) {
    return false;
  }
  if (firstItem.x === secondItem.x) {
    return (
      checkLineX(list, y1, y2, x1) ||
      checkLineX_Tr_Du(list, firstItem, secondItem)
    );
  }
  if (firstItem.y === secondItem.y) {
    return (
      checkLineY(list, x1, x2, y1) ||
      checkLineY_Tr_Du(list, firstItem, secondItem)
    );
  }
  return (
    checkRectX(list, firstItem, secondItem) ||
    checkRectY(list, firstItem, secondItem) ||
    checkMoreLineX(list, firstItem, secondItem, -1) ||
    checkMoreLineX(list, firstItem, secondItem, 1) ||
    checkMoreLineY(list, firstItem, secondItem, -1) ||
    checkMoreLineY(list, firstItem, secondItem, 1)
  );
}
// cot  ( chung x )
function checkLineX(list, y1, y2, x) {
  let min = Math.min(y1, y2);
  let max = Math.max(y1, y2);
  for (let y = min + 1; y < max; y++) {
    if (list[x][y].visible !== false) {
      return false;
    }
  }
  return true;
}
// hang tren / duoi
function checkLineX_Tr_Du(list, firstItem, secondItem) {
  let min = Math.min(firstItem.y, secondItem.y);
  let max = Math.max(firstItem.y, secondItem.y);
  let flag;
  let x1 = firstItem.x;
  let y1 = firstItem.y;
  let y2 = secondItem.y;
  // check tren
  for (let hang = x1 - 1; hang >= 0; hang--) {
    if (list[hang][y1].visible !== false || list[hang][y2].visible !== false) {
      break;
    } else {
      flag = true;
      for (let y = min + 1; y <= max; y++) {
        if (list[hang][y].visible !== false) flag = false;
      }
      if (flag) return true;
    }
  }
  // check duoi
  for (let hang = x1 + 1; hang <= list[1].length; hang++) {
    if (list[hang][y1].visible !== false || list[hang][y2].visible !== false) {
      break;
    } else {
      flag = true;
      for (let i = min + 1; i < max; i++) {
        if (list[hang][i].visible !== false) flag = false;
      }
      if (flag) return true;
    }
  }
  return false;
}

// hang  ( chung y )
function checkLineY(list, x1, x2, y) {
  let min = Math.min(x1, x2);
  let max = Math.max(x1, x2);
  for (let x = min + 1; x < max; x++) {
    if (list[x][y].visible !== false) {
      return false;
    }
  }
  return true;
}
// cot  trai / phai
function checkLineY_Tr_Du(list, firstItem, secondItem) {
  let min = Math.min(firstItem.x, secondItem.x);
  let max = Math.max(firstItem.x, secondItem.x);
  let flag;
  let x1 = firstItem.x;
  let y1 = firstItem.y;
  let x2 = secondItem.x;
  // check trai
  for (let cot = y1 - 1; cot >= 0; cot--) {
    if (list[x1][cot].visible !== false || list[x2][cot].visible !== false) {
      break;
    } else {
      flag = true;
      for (let i = min + 1; i < max; i++) {
        if (list[i][cot].visible !== false) {
          flag = false;
        }
      }
      if (flag) {
        return true;
      }
    }
  }
  // check phai
  for (let cot = y1 + 1; cot < list[0].length; cot++) {
    if (list[x1][cot].visible !== false || list[x2][cot].visible !== false) {
      break;
    } else {
      flag = true;
      for (let i = min + 1; i < max; i++) {
        if (list[i][cot].visible !== false) {
          flag = false;
          break;
        }
      }
      if (flag) return true;
    }
  }
  return false;
}

// ăn theo chữ z
function checkRectX(list, firstItem, secondItem) {
  // let pMinY = firstItem,
  //   pMaxY = secondItem;
  // if (firstItem.y > secondItem.y) {
  //   pMinY = secondItem;
  //   pMaxY = firstItem;
  // }
  // for (let y = pMinY.y; y <= pMaxY.y; y++) {
  //   if (y > pMinY.y && list[pMinY.x][y].visible !== false) {
  //     return false;
  //   }
  //   if (
  //     list[pMaxY.x][y].visible === false &&
  //     checkLineY(list, pMinY.x, pMaxY.x, y) &&
  //     checkLineX(list, y, pMaxY.y, pMaxY.x)
  //   ) {
  //     return true;
  //   }
  // }
  // return false;
}
// ăn theo chữ z
function checkRectY(list, firstItem, secondItem) {
  // let pMinX = firstItem,
  //   pMaxX = secondItem;
  // if (firstItem.x > secondItem.x) {
  //   pMinX = secondItem;
  //   pMaxX = firstItem;
  // }
  // for (let x = pMinX.x; x <= pMaxX.x; x++) {
  //   if (x > pMinX.x && list[x][pMinX.y].visible !== false) {
  //     return false;
  //   }
  //   if (
  //     list[x][pMaxX.y].visible === false &&
  //     this.checkLineX(list, pMinX.y, pMaxX.y, x) &&
  //     this.checkLineY(list, x, pMaxX.x, pMaxX.y)
  //   ) {
  //     return true;
  //   }
  // }
  // return false;
}

function checkMoreLineX(list, firstItem, secondItem, type) {
  console.log({ list }, { firstItem }, { secondItem }, { type });
  // let pMinY = firstItem;
  // let pMaxY = secondItem;
  // if (firstItem.y > secondItem.y) {
  //   pMinY = secondItem;
  //   pMaxY = firstItem;
  // }
  // let y = pMaxY.y;
  // let row = pMinY.x;
  // if (type === -1) {
  //   y = pMinY.y;
  //   row = pMaxY.x;
  // }
  // if (checkLineX(list, firstItem, secondItem)) {
  //   while (
  //     list[pMinY.x][y].visible === false &&
  //     list[pMaxY.x][y].visible === false
  //   ) {
  //     if (checkLineY(list, firstItem, secondItem)) {
  //       return true;
  //     }
  //     y += type;
  //   }
  // }
  // return false;
}

function checkMoreLineY(list, firstItem, secondItem, type) {
  console.log({ list }, { firstItem }, { secondItem }, { type });
  // let pMinX = firstItem;
  // let pMaxX = secondItem;
  // if (firstItem.x > secondItem.x) {
  //   pMinX = secondItem;
  //   pMaxX = firstItem;
  // }
  // let x = pMaxX.x;
  // let col = pMinX.y;
  // if (type === -1) {
  //   x = pMinX.x;
  //   col = pMaxX.y;
  // }
  // if (checkLineY(list, firstItem, secondItem)) {
  //   while (
  //     list[x][pMinX.y].visible === false &&
  //     list[x][pMaxX.y].visible === false
  //   ) {
  //     if (checkLineX(list, firstItem, secondItem)) {
  //       return true;
  //     }
  //     x += type;
  //   }
  // }
  // return false;
}
export default StoreReducers;
