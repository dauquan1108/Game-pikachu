import React, { Component } from "react";
import "./style.css";
//React-Redux --- npm install react-redux
import { connect } from "react-redux";
//Redux
import { ON_ITEM_BUTTON_CLICK } from "../actions/index";

class ViewGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  ItemButtonOnClick = () => {
    const { visible } = this.state;
    this.setState({
      visible: !visible,
    });
    // debugger
    const { item, x, y, onItemButtonClick } = this.props;
    const itemClick = {
      x,
      y,
      item,
    };
    onItemButtonClick(itemClick);
  };

  render() {
    const { item } = this.props;
    const { visible } = this.state;
    return (
      <div className="ViewGame">
        <div className={item.status ? "Item" : "Item_"}>
          <button
            className={visible ? "ItemButton_" : "ItemButton"}
            onClick={this.ItemButtonOnClick}
          >
            <img className="ItemImg" src={item.img} alt="icon-pokemon" />
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onItemButtonClick: (item) => {
      dispatch(ON_ITEM_BUTTON_CLICK(item));
    },
  };
};

export default connect(null, mapDispatchToProps)(ViewGame);
