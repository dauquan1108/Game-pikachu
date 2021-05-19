import React, { Component } from "react";
import "./style.css";
//React-Redux --- npm install react-redux
import { connect } from "react-redux";
//Redux
import { ON_ITEM_BUTTON_CLICK } from "../actions/index";

class Ingredient extends Component {
  ItemButtonOnClick = (list, arr, index, item, indexItem) => {
    const { onItemButtonClick } = this.props;
    onItemButtonClick(list, arr, index, item, indexItem);
  };
  render() {
    const { list } = this.props;
    return (
      <div className="Ingredient">
        {list.map((arr, x) => {
          return (
            <div key={x} className="row">
              {arr.map((item, y) => {
                return (
                  <div key={y}>
                    <div className="Item">
                      <button
                        className={
                          item.status === false ? "ItemButton" : "ItemButton_"
                        }
                        onClick={() =>
                          this.ItemButtonOnClick(list, arr, x, item, y)
                        }
                      >
                        <img
                          className="ItemImg"
                          src={item.img}
                          alt="icon-pokemon"
                        />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.StoreReducers,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onItemButtonClick: (list, arr, index, item, indexItem) => {
      dispatch(ON_ITEM_BUTTON_CLICK(list, arr, index, item, indexItem));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ingredient);
