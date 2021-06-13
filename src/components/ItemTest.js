import React, { Component } from "react";
import "./Test.css";
class ItemTest extends Component {
  ItemButtonOnClick = (x, y, item) => {
    const { onChangeStatusItem } = this.props;
    onChangeStatusItem(x, y, item);
  };

  render() {
    const { item, status, x, y } = this.props;
    return (
      <div
        className={
          status ? "classItemTest ItemTest" : "classItemTest ItemTest_"
        }
        onClick={() => this.ItemButtonOnClick(x, y, item)}
      >
        <div className={item.visible ? "ItemImg_" : "ItemImg"}>
          <img className="Img" src={item.img} alt="icon-pokemon" />
        </div>
      </div>
    );
  }
}
export default ItemTest;
