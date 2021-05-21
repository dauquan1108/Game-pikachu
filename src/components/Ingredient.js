import React, { Component } from "react";
import "./style.css";
//React-Redux --- npm install react-redux
import { connect } from "react-redux";
//Redux
import { ON_ITEM_BUTTON_CLICK } from "../actions/index";

class Ingredient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xItem1: null,
      yItem1: null,
    };
  }

  ItemButtonOnClick = (x, y) => {
    const { xItem1, yItem1 } = this.state;
    if (!xItem1) {
      this.setState({ xItem1: x, yItem1: y });
    }
    if (xItem1) {
      // console.log({ xItem1 }, { yItem1 });
      // check thuat toan
      // if(this.checkLineX(item1, x1, y1, item, x, y) || l || u || z) {
      //   ban ac tion
      // };
      if (this.checkLineX(xItem1, yItem1, x, y)) {
        console.log("tmdk");
        // const { onItemButtonClick } = this.props;
        // onItemButtonClick(list, arr, x, item, y);
      }
      this.setState({
        xItem1: null,
        yItem1: null,
      });
    }
  };
  checkLineX = (xItem1, yItem1, x, y) => {
    console.log({ x });
    console.log({ y });
    //debugger;
    // const { list } = this.props;
    // var min = Math.min(yItem1, y);
    // var max = Math.max(yItem1, y);
    // console.log({ min });
    // console.log({ max });
    // if (xItem1 === x) {
    //   for (let i = min + 1; i <= max; i++) {
    //     if (list[xItem1][i].status === true) {
    //       return false;
    //     }
    //   }
    //   return true;
    // }
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
                        className="ItemButton"
                        // {item.status === false ? "ItemButton" : "ItemButton_"}
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
