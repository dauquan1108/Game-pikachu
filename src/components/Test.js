import React, { Component } from "react";
import "./style.css";
const url =
  "https://static1.bestie.vn/Mlog/ImageContent/202102/17-cach-chup-anh-dep-van-nguoi-me-2021-0a87f2.jpg";
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: [
        ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
        ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
        ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"],
      ],
    };
  }
  componentDidMount() {
    this.xuLyMang();
  }

  xuLyMang = () => {
    let mangMoi = [];
    const { test } = this.state;
    test.forEach((item) => {
      const newItem = item.map((i) => {
        return { id: i, img: url };
      });
      return mangMoi.push(newItem);
    });
    console.log(mangMoi);
  };

  render() {
    const Test = () => {};
    return null;
  }
}
export default Test;
