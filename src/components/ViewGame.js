import React, { Component } from "react";
import "./style.css";

class ViewGame extends Component {
  ItemButtonOnClick = (e) => {
    // const test = action.e;
    console.log({ e });
    // const item = e.item;
    // console.log({ e.item }, { x }, { y });
  };
  render() {
    const { item, x, y } = this.props;
    // console.log({ item }, { x }, { y });
    return (
      <div className="ViewGame">
        <div className="Item">
          <button
            className={item.status === true ? "ItemButton_" : "ItemButton"}
            onClick={this.ItemButtonOnClick}
          >
            <img className="ItemImg" src={item.img} alt="icon-pokemon" />
          </button>
        </div>
      </div>
    );
  }
}

export default ViewGame;
