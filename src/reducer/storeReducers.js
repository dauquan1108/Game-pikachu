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

// function checkAll(list, firstItem, secondItem) {
//   let x1 = firstItem.x;
//   let y1 = firstItem.y;
//   let x2 = secondItem.x;
//   let y2 = secondItem.y;
//   let xMin, xMax, yMin, yMax, flag;
//   if (x1 < x2) {
//     xMin = x1;
//     xMax = x2;
//   } else {
//     xMin = x2;
//     xMax = x1;
//   }
//   if (y1 < y2) {
//     yMin = y1;
//     yMax = y2;
//   } else {
//     yMin = y2;
//     yMax = y1;
//   }
//   if (x1 === x2) {
//     if (yMax - yMin === 1) {
//       return true;
//     }
//     flag = true;
//     // check ngang:
//     if (
//       list[x1][yMin + 1].visible === false &&
//       list[x1][yMax - 1].visible === false
//     ) {
//       for (let y = yMin + 2; y <= yMax - 1; y++) {
//         if (list[x1][y].visible !== false) {
//           flag = false;
//         }
//       }
//       if (flag) return true;
//     }
//     // check tren
//     for (let hang = x1 - 1; hang >= 0; hang--) {
//       if (
//         list[hang][y1].visible !== false ||
//         list[hang][y2].visible !== false
//       ) {
//         break;
//       } else {
//         flag = true;
//         for (let y = yMin + 1; y <= yMax; y++) {
//           if (list[hang][y].visible !== false) flag = false;
//         }
//         if (flag) return true;
//       }
//     }
//     // check duoi
//     for (let hang = x1 + 1; hang <= list[1].length; hang++) {
//       if (
//         list[hang][y1].visible !== false ||
//         list[hang][y2].visible !== false
//       ) {
//         break;
//       } else {
//         flag = true;
//         for (let i = yMin + 1; i < yMax; i++) {
//           if (list[hang][i].visible !== false) flag = false;
//         }
//         if (flag) return true;
//       }
//     }
//     return false;
//   } else if (y1 === y2) {
//     if (xMax - xMin === 1) return true;
//     flag = true;
//     // check doc
//     if (
//       list[xMin + 1][y1].visible === false &&
//       list[xMax - 1][y1].visible === false
//     ) {
//       for (let i = xMin + 2; i < xMax - 1; i++) {
//         if (list[i][y1].visible !== false) flag = false;
//       }
//       if (flag) return true;
//     }
//     // check trai
//     for (let cot = y1 - 1; cot >= 0; cot--) {
//       if (list[x1][cot].visible !== false || list[x2][cot].visible !== false) {
//         break;
//       } else {
//         flag = true;
//         for (let i = xMin + 1; i < xMax; i++) {
//           if (list[i][cot].visible !== false) {
//             flag = false;
//           }
//         }
//         if (flag) {
//           return true;
//         }
//       }
//     }
//     // check phai
//     for (let cot = y1 + 1; cot < list[0].length; cot++) {
//       if (list[x1][cot].visible !== false || list[x2][cot].visible !== false) {
//         break;
//       } else {
//         flag = true;
//         for (let i = xMin + 1; i < xMax; i++) {
//           if (list[i][cot].visible !== false) {
//             flag = false;
//             break;
//           }
//         }
//         if (flag) return true;
//       }
//     }
//     return false;
//   }
//   // TH o lech nhau
//   else {
//     flag = true;
//     if (list[x1 - 1][y1].visible === false) {
//       debugger;
//       if (x1 > x2) {
//         //an giua
//         if (
//           (y1 > y2 && list[x2][y2 + 1].visible === false) ||
//           (y1 < y2 && list[y2 - 1].visible === false)
//         ) {
//           flag = true;
//           for (let t = x1 - 1; t >= x2; t++) {
//             if (list[t][y1].visible !== false) {
//               flag = false;
//               break;
//             }
//           }
//           if (flag) {
//             for (let t = yMax - 1; t > yMin; t--) {
//               if (list[x2][t].visible !== false) {
//                 flag = false;
//                 break;
//               }
//             }
//             console.log("ok");
//             if (flag) return true;
//           }
//         }
//         // an duoi
//         if (list[x2 + 1][y2].visible === false) {
//           for (let hang = x2 + 1; hang < x1; hang++) {
//             if (list[hang][y2].visible !== false) {
//               break;
//             }
//             for (let t = x1 - 1; t >= hang; t--) {
//               if (list[t][y1].visible !== false) {
//                 break;
//               }
//               if (hang === t) {
//                 flag = true;
//                 for (let cot = yMin + 1; cot < yMax; cot++) {
//                   if (list[hang][cot].visible !== false) {
//                     flag = false;
//                     break;
//                   }
//                 }
//                 console.log("ok2");
//                 if (flag) return true;
//               }
//             }
//           }
//         }
//       }
//       // 1th an tren chung voi x1 < x2
//       if (list[x2 - 1][y2].visible === false) {
//         for (let hang = xMin - 1; hang >= 0; hang--) {
//           if (
//             list[hang][y1].visible !== false ||
//             list[hang][y2].visible !== false
//           ) {
//             break;
//           } else {
//             flag = true;
//             for (let t = x1 - 1; t > hang; t--) {
//               if (list[t][y1].visible !== false) {
//                 flag = false;
//                 break;
//               }
//             }
//             if (flag) {
//               for (let t = x1 - 1; t > hang; t--) {
//                 if (list[t][y2].visible !== false) {
//                   flag = false;
//                   break;
//                 }
//               }
//               if (flag) {
//                 for (let i = yMin + 1; i < yMax; i++) {
//                   if (list[hang][i].visible !== false) {
//                     flag = false;
//                     break;
//                   }
//                 }
//                 if (flag) return true;
//               }
//             }
//           }
//         }
//       }
//     }
//     // ben duoi
//     if (list[x1 + 1][y1].visible === false) {
//       if (x1 < x2) {
//         if (
//           (y1 > y2 && list[x2][y2 + 1].visible === false) ||
//           (y1 < y2 && list[x2][y2 - 1].visible === false)
//         ) {
//           flag = true;
//           for (let t = x1 + 1; t <= x2; t++) {
//             if (list[t][y1].visible !== false) {
//               flag = false;
//               break;
//             }
//           }
//           if (flag) {
//             for (let t = yMin + 1; t < yMax - 1; t++) {
//               if (list[x2][t].visible !== false) {
//                 flag = false;
//                 break;
//               }
//             }
//             if (flag) return true;
//           }
//         }
//         // an tren:
//         if (list[x2 - 1][y2].visible === false) {
//           for (let hang = x2 - 1; hang > x1; hang--) {
//             if (list[hang][y2].visible !== false) {
//               break;
//             }
//             for (let t = x1 + 1; t <= hang; t++) {
//               if (list[t][y1].visible !== false) {
//                 break;
//               }
//               if (hang === t) {
//                 flag = true;
//                 for (let cot = yMin + 1; cot < yMax; cot++) {
//                   if (list[hang][cot].visible !== 0) {
//                     flag = false;
//                     break;
//                   }
//                 }
//                 if (flag) return true;
//               }
//             }
//           }
//         }
//       }
//       // 1TH an duoi cung voi x1 >x2
//       if (list[x2][y2].visible !== false) {
//         for (let hang = xMax + 1; hang < list.length; hang++) {
//           if (
//             list[hang][y1].visible !== false ||
//             list[hang][y2].visible !== false
//           ) {
//             break;
//           } else {
//             flag = true;
//             for (let t = x1 + 1; t < hang; t++) {
//               if (list[t][y1].visible !== false) {
//                 flag = false;
//                 break;
//               }
//             }
//             if (flag) {
//               for (let t = x2 + 1; t < hang; t++) {
//                 if (list[t][y2].visible !== 0) {
//                   flag = false;
//                   break;
//                 }
//               }
//               if (flag) {
//                 for (let i = yMin + 1; i < yMax; i++) {
//                   if (list[hang][i].visible !== false) {
//                     flag = false;
//                     break;
//                   }
//                 }
//                 if (flag) return true;
//               }
//             }
//           }
//         }
//       }
//     }
//     // ben trai
//     if (list[x1][y1 - 1].visible === false) {
//       if (list[x2][y2 - 1].visible === false) {
//         for (let cot = yMin - 1; cot >= 0; cot--) {
//           if (
//             list[x1][cot].visible !== false ||
//             list[x2][cot].visible !== false
//           ) {
//             break;
//           }
//           flag = true;
//           for (let t = y1 - 1; t > cot; t--) {
//             if (list[x1][t].visible !== false) {
//               flag = false;
//               break;
//             }
//           }
//           if (flag) {
//             for (let t = y2 - 1; t > cot; t--) {
//               if (list[x2][t].visible !== false) {
//                 flag = false;
//                 break;
//               }
//             }
//             if (flag) {
//               for (let hang = xMin + 1; hang < xMax; hang++) {
//                 if (list[hang][cot].visible !== false) {
//                   flag = false;
//                   break;
//                 }
//               }
//               if (flag) return true;
//             }
//           }
//         }
//       }
//       if (y1 > y2) {
//         // an phai
//         if (list[x2][y2 + 1].visible === false) {
//           for (let cot = y2 + 1; cot < y1; cot++) {
//             if (list[x2][cot].visible !== false) {
//               break;
//             }
//             for (let t = y1 - 1; t >= cot; t--) {
//               if (list[x1][t].visible !== false) {
//                 break;
//               }
//               if (cot === t) {
//                 flag = true;
//                 for (let hang = xMin + 1; hang < xMax; hang++) {
//                   if (list[hang][cot].visible !== false) {
//                     flag = false;
//                     break;
//                   }
//                 }
//                 if (flag) return true;
//               }
//             }
//           }
//         }
//         // an tren/ duoi
//         if (
//           (x1 > x2 && list[x2 + 1][y2].visible === false) ||
//           (x1 < x2 && list[x2 - 1][y2].visible === false)
//         ) {
//           if (list[x1][y1].visible === false) {
//             flag = true;
//             for (let t = xMin + 1; t < xMax; t++) {
//               if (list[t][y2].visible !== false) {
//                 flag = false;
//                 break;
//               }
//             }
//             if (flag) {
//               for (let t = yMin + 1; t < yMax; t++) {
//                 if (list[x1][t].visible !== false) {
//                   flag = false;
//                   break;
//                 }
//               }
//               if (flag) return true;
//             }
//           }
//         }
//       }
//     }
//     // ben phai
//     if (list[x1][y1 + 1].visible === false) {
//       if (list[x2][y2 + 1].visible === false) {
//         for (let cot = yMax + 1; cot < list[0].length; cot++) {
//           if (
//             list[x1][cot].visible !== false ||
//             list[x2][cot].visible !== false
//           ) {
//             break;
//           }
//           flag = true;
//           for (let t = y1 + 1; t < cot; t++) {
//             if (list[x1][t].visible !== false) {
//               flag = false;
//               break;
//             }
//           }
//           if (flag) {
//             for (let t = y2 + 1; t < cot; t++) {
//               if (list[x2][t].visible !== false) {
//                 flag = false;
//                 break;
//               }
//             }
//             if (flag) {
//               for (let hang = xMin + 1; hang < xMax; hang++) {
//                 if (list[hang][cot].visible !== false) {
//                   flag = false;
//                   break;
//                 }
//               }
//               if (flag) return true;
//             }
//           }
//         }
//       }
//       if (y1 < y2) {
//         // an trai
//         if (list[x2][y2 - 1].visible === false) {
//           for (let cot = y1 + 1; cot < y2; cot++) {
//             if (list[x1][cot].visible !== false) {
//               break;
//             }
//             for (let t = y2 - 1; t >= cot; t--) {
//               if (list[x2][t].visible !== false) {
//                 break;
//               }
//               if (cot === t) {
//                 flag = true;
//                 for (let hang = xMin + 1; hang < xMax; hang++) {
//                   if (list[hang][cot].visible !== false) {
//                     flag = false;
//                     break;
//                   }
//                 }
//                 if (flag) return true;
//               }
//             }
//           }
//         }
//         // an tren/ duoi
//         if (
//           (x1 > x2 && list[x2 + 1][y2].visible === false) ||
//           (x1 < x2 && list[x2 - 1][y2].visible === false)
//         ) {
//           if (list[x1][y2].visible === false) {
//             flag = true;
//             for (let t = xMin + 1; t < xMax; t++) {
//               if (list[t][y2].visible !== false) {
//                 flag = false;
//                 break;
//               }
//             }
//             if (flag) {
//               for (let t = yMin + 1; t < yMax; t++) {
//                 if (list[x1][t].visible !== false) {
//                   flag = false;
//                   break;
//                 }
//               }
//               if (flag) return true;
//               console.log("ok3");
//             }
//           }
//         }
//       }
//     }
//     // ben phai
//     if (list[x1][y1 + 1].visible === false) {
//       if (list[x2][y2 + 1].visible === false) {
//         for (let cot = yMax + 1; cot < list[0].length; cot++) {
//           if (
//             list[x1][cot].visible !== false ||
//             list[x2][cot].visible !== false
//           ) {
//             break;
//           }
//           flag = true;
//           for (let t = y1 + 1; t < cot; t++) {
//             if (list[x1][t].visible !== false) {
//               flag = false;
//               break;
//             }
//           }
//           if (flag) {
//             for (let t = y2 + 1; t < cot; t++) {
//               if (list[x2][t].visible !== false) {
//                 flag = false;
//                 break;
//               }
//             }
//             if (flag) {
//               for (let hang = xMin + 1; hang < xMax; hang++) {
//                 if (list[hang][cot].visible !== false) {
//                   flag = false;
//                   break;
//                 }
//               }
//               if (flag) return true;
//             }
//           }
//         }
//       }
//       if (y1 < y2) {
//         // an trai
//         if (list[x2][y2 - 1].visible === false) {
//           for (let cot = y1 + 1; cot < y2; cot++) {
//             if (list[x1][cot].visible !== false) {
//               break;
//             }
//             for (let t = y2 - 1; t >= cot; t--) {
//               if (list[x2][t].visible !== false) {
//                 break;
//               }
//               if (cot === t) {
//                 flag = true;
//                 for (let hang = xMin + 1; hang < xMax; hang++) {
//                   if (list[hang][cot].visible !== false) {
//                     flag = false;
//                     break;
//                   }
//                 }
//                 if (flag) return true;
//               }
//             }
//           }
//         }
//         // an tren / duoi
//         //an tren/duoi:
//         if (
//           (x1 > x2 && list[x2 + 1][y2].visible === false) ||
//           (x1 < x2 && list[x2 - 1][y2].visible === false)
//         ) {
//           if (list[x1][y2].visible === false) {
//             flag = true;
//             for (let t = xMin + 1; t < xMax; t++) {
//               if (list[t][y2].visible !== false) {
//                 flag = false;
//                 break;
//               }
//             }
//             if (flag) {
//               for (let t = yMin + 1; t < yMax; t++) {
//                 if (list[x1][t].visible !== false) {
//                   flag = false;
//                   break;
//                 }
//               }
//               if (flag) return true;
//               console.log("ok4");
//             }
//           }
//         }
//       }
//     }
//     return false;
//   }
// }

function checkAll(list, firstItem, secondItem) {
  if (firstItem.x === secondItem.x && firstItem.y === secondItem.y) {
    return false;
  }
  if (firstItem.x === secondItem.x) {
    return (
      checkLineX(list, firstItem, secondItem) ||
      checkLineX_Tr_Du(list, firstItem, secondItem)
    );
  }
  if (firstItem.y === secondItem.y) {
    return (
      checkLineY(list, firstItem, secondItem) ||
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
function checkLineX(list, firstItem, secondItem) {
  let min = Math.min(firstItem.y, secondItem.y);
  let max = Math.max(firstItem.y, secondItem.y);
  for (let i = min + 1; i < max; i++) {
    if (list[firstItem.x][i].visible !== false) {
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
function checkLineY(list, firstItem, secondItem) {
  let min = Math.min(firstItem.x, secondItem.x);
  let max = Math.max(firstItem.x, secondItem.x);
  for (let i = min + 1; i < max; i++) {
    if (list[i][secondItem.y].visible !== false) {
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
  console.log({ list }, { firstItem }, { secondItem });
  // console.log("ok1");
  // let pMinY = firstItem;
  // let pMaxY = secondItem;
  // if (firstItem.y > secondItem.y) {
  //   pMinY = secondItem;
  //   pMaxY = firstItem;
  // }
  // for (let y = pMinY.y + 1; y < pMaxY; y++) {
  //   if (
  //     checkLineX(list, firstItem, secondItem) &&
  //     checkLineY(list, firstItem, secondItem) &&
  //     checkLineX(list, firstItem, secondItem)
  //   ) {
  //     return true;
  //   }
  // }
  // return false;
  // for (let y = pMinY.y; y <= pMaxY.y; y++) {
  //   if (y > pMinY.y && list[pMinY.x][y].visible !== false) {
  //     return false;
  //   }
  //   const test = list[pMaxY.x][y].visible;
  //   console.log({ test });
  //   if (
  //     list[pMaxY.x][y].visible === false &&
  //     checkLineY(list, firstItem, secondItem) &&
  //     checkLineX(list, firstItem, secondItem)
  //   ) {
  //     return true;
  //   }
  // }
  // return false;
}
// ăn theo chữ z
function checkRectY(list, firstItem, secondItem) {
  console.log({ list }, { firstItem }, { secondItem });

  // console.log("ok2");
  // let pMinX = firstItem;
  // let pMaxX = secondItem;
  // if (firstItem.x > secondItem.x) {
  //   pMinX = secondItem;
  //   pMaxX = firstItem;
  // }
  // for (let x = pMinX.x + 1; x < pMaxX; x++) {
  //   if (
  //     checkLineY(list, firstItem, secondItem) &&
  //     checkLineX(list, firstItem, secondItem) &&
  //     checkLineY(list, firstItem, secondItem)
  //   ) {
  //     return true;
  //   }
  // }
  // return false;
  // for (let x = pMinX.x; x <= pMaxX.x; x++) {
  //   if (x > pMinX.x && list[x][pMinX.y].visible !== false) {
  //     return false;
  //   }
  //   if (
  //     list[x][pMaxX.y].visible === false &&
  //     checkLineX(list, firstItem, secondItem) &&
  //     checkLineY(list, firstItem, secondItem)
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
