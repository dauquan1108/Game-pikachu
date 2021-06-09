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
      visible: false,
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

  checkAll = (firstItem, endItem) => {
    console.log(firstItem, endItem);
    const x1 = firstItem.x;
    const y1 = firstItem.y;
    const x2 = endItem.x;
    const y2 = endItem.y;
    if (x1 === x2 && y1 === y2) return false;
    if (x1 === x2) return this.checkLineX(y1, y2, x1);
    if (y1 === y2) return this.checkLineY(x1, x2, y1);
    if (this.checkRectX(firstItem, endItem)) return true;
    if (this.checkRectY(firstItem, endItem)) return true;
    return false;
  };
  checkLineX = (y1, y2, x) => {
    let min = Math.min(y1, y2);
    let max = Math.max(y1, y2);
    // run column
    const { endArrayRandom } = this.state;
    for (let y = min + 1; y < max; y++) {
      if (endArrayRandom[y][x].visible) {
        return false;
      }
    }
    return true;
  };

  checkLineY = (x1, x2, y) => {
    let min = Math.min(x1, x2);
    let max = Math.max(x1, x2);
    const { endArrayRandom } = this.state;
    for (let x = min + 1; x < max; x++) {
      if (endArrayRandom[y][x].visible) {
        return false;
      }
    }
    return true;
  };

  checkRectX = (p1, p2) => {
    let pMinY = p1;
    let pMaxY = p2;
    if (p1.y > p2.y) {
      pMinY = p2;
      pMaxY = p1;
    }
    const { endArrayRandom } = this.state;
    for (let y = pMinY.y; y <= pMaxY.y; y++) {
      if (y > pMinY.y && endArrayRandom[y][pMinY.x].visible) {
        return false;
      }
      if (
        !endArrayRandom[y][pMaxY.x].visible &&
        this.checkLineY(pMinY.x, pMaxY.x, y) &&
        this.checkLineX(y, pMaxY.y, pMaxY.x)
      ) {
        return true;
      }
    }
    return false;
  };

  checkRectY = (p1, p2) => {
    let pMinX = p1;
    let pMaxX = p2;
    if (p1.x > p2.x) {
      pMinX = p2;
      pMaxX = p1;
    }
    const { endArrayRandom } = this.state;
    for (let x = pMinX.x; x <= pMaxX.x; x++) {
      if (x > pMinX.x && endArrayRandom[pMinX.y][x].visible) {
        return false;
      }
      if (
        !endArrayRandom[pMaxX.y][x].visible &&
        this.checkLineX(pMinX.y, pMaxX.y, x) &&
        this.checkLineY(x, pMaxX.x, pMaxX.y)
      ) {
        return true;
      }
    }
    return false;
  };

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

  //render các col trong row
  renderItemCols = (e, y) => {
    return e.map((item, x) => (
      <div
        key={x}
        style={{
          cursor: "pointer",
          width: "7.14286%",
          border: "4px solid black",
          textAlign: "center",
          margin: "0 auto",
          paddingTop: "10px",
          background: item.visible ? "#6598eb" : "#c9a061",
        }}
        onClick={() => this.onChangeStatusItem(x, y, item)}
      >
        <div
          style={{
            display: item.visible ? "unset" : "none",
          }}
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
          height: "80px",
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
    return <div style={{ width: "1000px" }}>{this.renderItemRows()}</div>;
  }
}
export default Test;
