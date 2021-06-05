import { Component } from "react";
import "./style.css";
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
const rows = 8;
const cols = 14;
const limit = 4;
const gameView = [
  { id: 0, img: "a1", check: 0 },
  { id: 1, img: "a2", check: 0 },
  { id: 2, img: "a3", check: 0 },
  { id: 3, img: "a4", check: 0 },
  { id: 4, img: "a5", check: 0 },
  { id: 5, img: "a6", check: 0 },
  { id: 6, img: "a7", check: 0 },
  { id: 7, img: "a8", check: 0 },
  { id: 8, img: "a9", check: 0 },
  { id: 9, img: "a10", check: 0 },
  { id: 10, img: "a11", check: 0 },
  { id: 11, img: "a12", check: 0 },
  { id: 12, img: "a13", check: 0 },
  { id: 13, img: "a14", check: 0 },
  { id: 14, img: "a15", check: 0 },
  { id: 15, img: "a16", check: 0 },
  { id: 16, img: "a17", check: 0 },
  { id: 17, img: "a18", check: 0 },
];

const dataFake = [
  [
    {
      id: -1,
      img: null,
      visible: false,
    },
    {
      id: -1,
      img: null,
      visible: false,
    },
    {
      id: -1,
      img: null,
      visible: false,
    },
    {
      id: -1,
      img: null,
      visible: false,
    },
    {
      id: -1,
      img: null,
      visible: false,
    },
    {
      id: -1,
      img: null,
      visible: false,
    },
    {
      id: -1,
      img: null,
      visible: false,
    },
    {
      id: -1,
      img: null,
      visible: false,
    },
    {
      id: -1,
      img: null,
      visible: false,
    },
    {
      id: -1,
      img: null,
      visible: false,
    },
    {
      id: -1,
      img: null,
      visible: false,
    },
    {
      id: -1,
      img: null,
      visible: false,
    },
    {
      id: -1,
      img: null,
      visible: false,
    },
    {
      id: -1,
      img: null,
      visible: false,
    },
  ],
  [
    {
      id: -1,
      img: null,
      visible: false,
    },
    {
      id: 1,
      img: "a9",
      visible: true,
    },
    {
      id: 10,
      img: "a11",
      visible: true,
    },
    {
      id: 13,
      img: "a14",
      visible: true,
    },
    {
      id: 2,
      img: "a3",
      visible: true,
    },
    {
      id: 8,
      img: "a9",
      visible: true,
    },
    {
      id: 7,
      img: "a8",
      visible: true,
    },
    {
      id: 13,
      img: "a14",
      visible: true,
    },
    {
      id: 1,
      img: "a2",
      visible: true,
    },
    {
      id: 16,
      img: "a14",
      visible: true,
    },
    {
      id: 6,
      img: "a7",
      visible: true,
    },
    {
      id: 5,
      img: "a6",
      visible: true,
    },
    {
      id: 17,
      img: "a18",
      visible: true,
    },
    {
      id: -1,
      img: null,
      visible: false,
    },
  ],
  [
    {
      id: -1,
      img: null,
      visible: false,
    },
    {
      id: 1,
      img: "a2",
      visible: false,
    },
    {
      id: 1,
      img: "a4",
      visible: false,
    },
    {
      id: 1,
      img: "a3",
      visible: true,
    },
    {
      id: 6,
      img: "a7",
      visible: true,
    },
    {
      id: 7,
      img: "a8",
      visible: true,
    },
    {
      id: 8,
      img: "a9",
      visible: true,
    },
    {
      id: 16,
      img: "a17",
      visible: true,
    },
    {
      id: 12,
      img: "a13",
      visible: true,
    },
    {
      id: 9,
      img: "a18",
      visible: true,
    },
    {
      id: 4,
      img: "a5",
      visible: true,
    },
    {
      id: 1,
      img: "a2",
      visible: true,
    },
    {
      id: 6,
      img: "a7",
      visible: true,
    },
    {
      id: -1,
      img: null,
      visible: false,
    },
  ],
  [
    {
      id: -1,
      img: null,
      visible: false,
    },
    {
      id: 11,
      img: "a12",
      visible: true,
    },
    {
      id: 2,
      img: "a3",
      visible: true,
    },
    {
      id: 17,
      img: "a18",
      visible: true,
    },
    {
      id: 12,
      img: "a13",
      visible: true,
    },
    {
      id: 13,
      img: "a14",
      visible: true,
    },
    {
      id: 7,
      img: "a8",
      visible: true,
    },
    {
      id: 0,
      img: "a1",
      visible: true,
    },
    {
      id: 11,
      img: "a12",
      visible: true,
    },
    {
      id: 4,
      img: "a5",
      visible: true,
    },
    {
      id: 4,
      img: "a5",
      visible: false,
    },
    {
      id: 9,
      img: "a10",
      visible: true,
    },
    {
      id: 17,
      img: "a18",
      visible: true,
    },
    {
      id: -1,
      img: null,
      visible: false,
    },
  ],
  [
    {
      id: -1,
      img: null,
      visible: false,
    },
    {
      id: 4,
      img: "a5",
      visible: true,
    },
    {
      id: 16,
      img: "a17",
      visible: true,
    },
    {
      id: 6,
      img: "a7",
      visible: true,
    },
    {
      id: 1,
      img: "a2",
      visible: true,
    },
    {
      id: 5,
      img: "a6",
      visible: true,
    },
    {
      id: 8,
      img: "a9",
      visible: true,
    },
    {
      id: 15,
      img: "a16",
      visible: true,
    },
    {
      id: 14,
      img: "a15",
      visible: true,
    },
    {
      id: 0,
      img: "a1",
      visible: true,
    },
    {
      id: 4,
      img: "a4",
      visible: true,
    },
    {
      id: 16,
      img: "a17",
      visible: true,
    },
    {
      id: 3,
      img: "a4",
      visible: true,
    },
    {
      id: -1,
      img: null,
      visible: false,
    },
  ],
  [
    {
      id: -1,
      img: null,
      visible: false,
    },
    {
      id: 15,
      img: "a16",
      visible: true,
    },
    {
      id: 11,
      img: "a12",
      visible: true,
    },
    {
      id: 15,
      img: "a16",
      visible: true,
    },
    {
      id: 11,
      img: "a12",
      visible: true,
    },
    {
      id: 2,
      img: "a3",
      visible: true,
    },
    {
      id: 10,
      img: "a11",
      visible: true,
    },
    {
      id: 7,
      img: "a8",
      visible: true,
    },
    {
      id: 10,
      img: "a11",
      visible: true,
    },
    {
      id: 9,
      img: "a10",
      visible: true,
    },
    {
      id: 6,
      img: "a16",
      visible: true,
    },
    {
      id: 9,
      img: "a10",
      visible: true,
    },
    {
      id: 10,
      img: "a11",
      visible: true,
    },
    {
      id: -1,
      img: null,
      visible: false,
    },
  ],
  [
    {
      id: -1,
      img: null,
      visible: false,
    },
    {
      id: 14,
      img: "a15",
      visible: true,
    },
    {
      id: 5,
      img: "a6",
      visible: true,
    },
    {
      id: 0,
      img: "a1",
      visible: true,
    },
    {
      id: 0,
      img: "a1",
      visible: true,
    },
    {
      id: 5,
      img: "a6",
      visible: true,
    },
    {
      id: 12,
      img: "a13",
      visible: true,
    },
    {
      id: 9,
      img: "a10",
      visible: true,
    },
    {
      id: 12,
      img: "a13",
      visible: true,
    },
    {
      id: 16,
      img: "a17",
      visible: true,
    },
    {
      id: 3,
      img: "a4",
      visible: true,
    },
    {
      id: 14,
      img: "a15",
      visible: true,
    },
    {
      id: 14,
      img: "a15",
      visible: true,
    },
    {
      id: -1,
      img: null,
      visible: false,
    },
  ],
  [
    {
      id: -1,
      img: null,
      visible: false,
    },
    {
      id: -1,
      img: null,
      visible: false,
    },
    {
      id: -1,
      img: null,
      visible: false,
    },
    {
      id: -1,
      img: null,
      visible: false,
    },
    {
      id: -1,
      img: null,
      visible: false,
    },
    {
      id: -1,
      img: null,
      visible: false,
    },
    {
      id: -1,
      img: null,
      visible: false,
    },
    {
      id: -1,
      img: null,
      visible: false,
    },
    {
      id: -1,
      img: null,
      visible: false,
    },
    {
      id: -1,
      img: null,
      visible: false,
    },
    {
      id: -1,
      img: null,
      visible: false,
    },
    {
      id: -1,
      img: null,
      visible: false,
    },
    {
      id: -1,
      img: null,
      visible: false,
    },
    {
      id: -1,
      img: null,
      visible: false,
    },
  ],
];
class Test extends Component {
  constructor(props) {
    super(props);
    const temp = this.initData([]);
    this.state = {
      firstItem: null,
      endArrayRandom: dataFake,
    };
  }
  // Bọc đầu cuối của mảng bảng giá trị trống
  newArrayRows = (initialState) => {
    for (let i = 0; i < cols; i++) {
      if (i === 0 || i === cols - 1) {
        initialState.push({
          id: -1,
          img: null,
          visible: false,
        });
      } else {
        // lấy ra giá trị nguyên của item
        const ranDomItem = Math.floor(Math.random() * gameView.length);
        // lấy xong và đẩy vào trong item
        const item = gameView[ranDomItem];
        initialState.push({
          id: item.id,
          img: item.img,
          visible: true,
        });
        item.check++;
        if (item.check === limit) {
          gameView.splice(ranDomItem, 1);
        }
      }
    }
    return initialState;
  };
  // end Bọc đầu cuối của mảng bảng giá trị trống trái /phải

  // thêm gia mảng rỗng ở đầu và cuối mảng trên / dưới
  newArrayNullCols = () => {
    let wrapArray = [];

    for (let i = 0; i < cols; i++) {
      wrapArray.push({
        id: -1,
        img: null,
        visible: false,
      });
    }
    return wrapArray;
  };
  //end thêm gia mảng rỗng ở đầu và cuối mảng trên / dưới

  initData = (initialStateTwo) => {
    for (let x = 0; x < rows; x++) {
      if (x === 0 || x === rows - 1) {
        initialStateTwo.push(this.newArrayNullCols());
      } else {
        initialStateTwo.push(this.newArrayRows([]));
      }
    }
    return initialStateTwo;
  };

  onChangeStatusItem = (x, y, item) => {
    const { endArrayRandom, firstItem } = this.state;
    if (firstItem) {
      const endItem = { x, y, item };
      if (item.id === firstItem.item.id && this.checkAll(firstItem, endItem)) {
        endArrayRandom[y][x].visible = false;
        endArrayRandom[firstItem.y][firstItem.x].visible = false;
        this.setState({ firstItem: null });
      } else {
        this.setState({ firstItem: null });
      }
    } else {
      this.setState({ firstItem: { x, y, item } });
    }
    this.setState({ endArrayRandom });
  };

  checkAll = (firstItem, endItem) => {
    const x1 = firstItem.x;
    const y1 = firstItem.y;
    const x2 = endItem.x;
    const y2 = endItem.y;
    if (x1 === x2 && y1 === y2) return false;
    if (x1 === x2) return this.checkLineX(x1, x2, y1);
    if (y1 === y2) return this.checkLineY(y1, y2, x1);
    if (this.checkRectX(x1, y1, x2, y2)) return true;
    if (this.checkRectX(x1, y1, x2, y2)) return true;
    return false;
  };

  checkRectX = (x1, y1, x2, y2) => {
    var yMax, yMin, xMax, xMin;
    yMax = Math.max(y1, y2);
    yMin = Math.min(y1, y2);

    xMax = yMax === y1 ? x1 : x2;
    xMin = yMin === y1 ? x1 : x2;
    if (x1 !== x2) {
      for (var i = yMin + 1; i < yMax; i++) {
        if (
          this.checkLineX(yMin, i + 1, xMin) &&
          this.checkLineY(xMin, xMax, i) &&
          this.checkLineX(i - 1, yMax, xMax)
        ) {
          return i;
        }
      }
      return true;
    } else return true;
  };

  checkRectY = (x1, y1, x2, y2) => {
    var yMax, yMin, xMax, xMin;

    xMax = Math.max(x1, x2);
    xMin = Math.min(x1, x2);

    yMax = xMax === x1 ? y1 : y2;
    yMin = xMin === x1 ? y1 : y2;

    if (y1 !== y2) {
      for (var i = xMin + 1; i < xMax; i++) {
        if (
          this.checkLineY(xMin, i + 1, yMin) &&
          this.checkLineX(yMin, yMax, i) &&
          this.checkLineY(i - 1, xMax, yMax)
        ) {
          return i;
        }
      }
      return true;
    } else return true;
  };

  checkLineX = (y1, y2, x) => {
    const { endArrayRandom } = this.state;
    let min = Math.min(y1, y2);
    let max = Math.max(y1, y2);
    for (let y = min + 1; y < max; y++) {
      if (endArrayRandom[y][x].visible) return false;
    }
    return true;
  };

  checkLineY = (x1, x2, y) => {
    const { endArrayRandom } = this.state;
    let min = Math.min(x1, x2);
    let max = Math.max(x1, x2);
    for (let x = min + 1; x < max; x++) {
      if (endArrayRandom[y][x].visible) return false;
    }
    return true;
  };

  //render các col trong row
  renderItemCols = (e, y) => {
    return e.map((item, x) => (
      <div
        key={x}
        style={{
          width: "7.14286%",
          border: "4px solid black",
          textAlign: "center",
          margin: "0 auto",
          paddingTop: "10px",
          background: item.visible ? "blue" : "red",
        }}
      >
        <div
          style={{
            display: item.visible ? "unset" : "none",
          }}
          onClick={() => this.onChangeStatusItem(x, y, item)}
        >
          <p>{item.id}</p>
        </div>
      </div>
    ));
  };

  //render cac rows trong view
  renderItemRows = () => {
    const { endArrayRandom } = this.state;
    return endArrayRandom.map((e, y) => (
      <div
        style={{
          height: "50px",
          border: "2px",
          display: "flex",
        }}
        key={y}
      >
        {this.renderItemCols(e, y)}
      </div>
    ));
  };

  render() {
    return <div style={{ width: "500px" }}>{this.renderItemRows()}</div>;
  }
}
export default Test;
