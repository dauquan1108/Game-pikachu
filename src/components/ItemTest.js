import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
class ItemTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  ItemButtonOnClick = () => {};

  render() {
    const { item } = this.props;
    return (
      <div className="ItemTest">
        <div
        //   key={x}
        //   className={status ? "ClassItem Item_" : "ClassItem Item"}
        //   onClick={() => this.onChangeStatusItem(x, y, item)}
        >
          {/* <div
            style={{
              display: item.visible ? "unset" : "none",
            }}
          >
            <img className="Img" src={item.img} alt="icon-pokemon" />
          </div> */}
        </div>
      </div>
    );
  }
}
export default ItemTest;
