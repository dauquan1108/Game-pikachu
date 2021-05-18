import React, { Component } from "react";
import "./style.css";
//React-Redux --- npm install react-redux
import { connect } from "react-redux";

import { ON_ITEM_BUTTON_CLICK } from "../actions/index";

class Ingredient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickButton: false,
    };
  }
  ItemButtonOnClick = (list, arr, index, item, indexItem) => {
    this.setState({
      clickButton: !this.state.clickButton,
    });
    const { onItemButtonClick } = this.props;
    onItemButtonClick(list, arr, index, item, indexItem);
  };
  render() {
    const clickButton = this.state.clickButton ? "ItemButton" : "ItemButton_";
    const { list } = this.props;
    console.log({ list });
    // const id = list.payload.item.id;
    // console.log({ id });
    return (
      <div className="Ingredient">
        {list.map((arr, index) => {
          return (
            <div key={index} className="row">
              {arr.map((item, indexItem) => {
                return (
                  <div key={indexItem}>
                    <div className="Item">
                      <button
                        className="ItemButton"
                        onClick={() =>
                          this.ItemButtonOnClick(
                            list,
                            arr,
                            index,
                            item,
                            indexItem
                          )
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
    list: state.Stor,
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
