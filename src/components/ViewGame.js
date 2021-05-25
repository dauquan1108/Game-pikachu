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
      item1: null,
    };
  }
  ItemButtonOnClick = (item, x, y) => {
    const { item1 } = this.state;
    console.log({ item }, { x }, { y });
    if (item1) {
      this.setState({ item1: item, xItem1: x, yItem1: y });
    } else {
      this.setState({
        item1: null,
      });
    }
  };
  render() {
    const { item, x, y } = this.props;
    return (
      <div className="ViewGame">
        <div className="Item">
          <button
            className={item.status === true ? "ItemButton_" : "ItemButton"}
            onClick={() => this.ItemButtonOnClick(item, x, y)}
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
    onItemButtonClick: (x, y, item, xItem1, yItem1, item1) => {
      dispatch(ON_ITEM_BUTTON_CLICK(x, y, item, xItem1, yItem1, item1));
    },
  };
};

export default connect(null, mapDispatchToProps)(ViewGame);
