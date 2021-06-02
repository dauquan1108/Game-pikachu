import React, { Component } from "react";
import "./style.css";
//React-Redux --- npm install react-redux
import { connect } from "react-redux";
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
        <div className={item.visible ? "Item_" : "Item"}>
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
    onItemButtonClick: (item) =>
      dispatch({ type: "ITEM_BUTTON_CLICK", payload: { item } }),
  };
};

export default connect(null, mapDispatchToProps)(ViewGame);
