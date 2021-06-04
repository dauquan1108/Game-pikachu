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
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameView: [
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
      ],
      firstItem: null,
      endArrayRandom: [],
      cols: 14,
      rows: 8,
      limit: 4,
    };
  }
  // Bọc đầu cuối của mảng bảng giá trị trống
  newArrayRows = (initialState) => {
    const { gameView, cols, limit } = this.state;
    for (let i = 0; i < cols; i++) {
      if (i === 0 || i === cols - 1) {
        initialState.push({
          id: -1,
          img: null,
          visible: true,
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
    const { cols } = this.state;
    let wrapArray = [];
    for (let i = 0; i < cols; i++) {
      wrapArray.push({
        id: -1,
        img: null,
        visible: true,
      });
    }
    return wrapArray;
  };
  //end thêm gia mảng rỗng ở đầu và cuối mảng trên / dưới

  setState = (initialStateTwo) => {
    const { rows } = this.state;
    for (let x = 0; x < rows; x++) {
      if (x === 0 || x === rows - 1) {
        initialStateTwo.push(this.newArrayNullCols());
      } else {
        const array = this.newArrayRows([]);
        initialStateTwo.push(array);
      }
    }
    return initialStateTwo;
  };

  initState = () => {
    const list = this.setState([]);
    console.log({ list });
  };

  componentDidMount() {
    this.initState();
  }

  render() {
    return null;
  }
}
export default Test;
