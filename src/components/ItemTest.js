import React, { Component } from "react";
import "./Test.css";
class ItemTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ClickItem: true,
    };
  }
  ItemButtonOnClick = (x, y, item) => {
    const { onChangeStatusItem } = this.props;
    onChangeStatusItem(x, y, item);
    const { ClickItem } = this.state;
    this.setState({
      ClickItem: !ClickItem,
    });
  };
  // CheckItemVisible = () => {
  //   const { item } = this.props;
  //   const { ClickItem } = this.state;
  //   if (item.visible === false) {
  //     this.setState({
  //       ClickItem: !ClickItem,
  //     });
  //   }
  //   this.setState({
  //     ClickItem: !ClickItem,
  //   });
  // };

  render() {
    const { item, status, x, y } = this.props;
    const { ClickItem } = this.state;
    return (
      <div
        className={
          status ? "classItemTest ItemTest" : "classItemTest ItemTest_"
        }
        onClick={() => this.ItemButtonOnClick(x, y, item)}
      >
        <div className={item.visible ? "ItemImg_" : "ItemImg"}>
          <samp className={ClickItem ? "ClickItem" : "ClickItem_"}>
            <img className="Img" src={item.img} alt="icon-pokemon" />
          </samp>
        </div>
      </div>
    );
  }
}
export default ItemTest;
