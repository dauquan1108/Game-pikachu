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
      item1: null,
      xItem1: null,
      yItem1: null,
    };
  }

  ItemButtonOnClick = (x, y, item) => {
    const { item1, xItem1, yItem1 } = this.state;
    // debugger;
    if (!item1) {
      this.setState({ item1: item, xItem1: x, yItem1: y });
    } else {
      if (
        (x === xItem1 && this.checkLineX(yItem1, y, x, xItem1)) ||
        (y === yItem1 && this.checkLineY(xItem1, x, y, yItem1))
      ) {
        // console.log("tmdk");
        const { onItemButtonClick } = this.props;
        onItemButtonClick(x, y, item, xItem1, yItem1, item1);
      }
      this.setState({
        item1: null,
        xItem1: null,
        yItem1: null,
      });
    }
  };

  checkLineX = (yItem1, y, x, xItem1) => {
    const { list } = this.props;
    let min = Math.min(yItem1, y);
    let max = Math.max(yItem1, y);
    if (x === xItem1) {
      for (let i = min + 1; i < max; i++) {
        if (!list[x][i].status) {
          return false;
        }
      }
      return true;
    }
  };
  checkLineY = (xItem1, x, y, yItem1) => {
    const { list } = this.props;
    let min = Math.min(xItem1, x);
    let max = Math.max(xItem1, x);
    // debugger;
    // if (list[xItem1][y].id === list[x][y].id && max - min === 1) {
    //   return true;
    // }
    if (y === yItem1) {
      for (let i = min + 1; i < max; i++) {
        if (!list[y][i].status) {
          return false;
        }
      }
      return true;
    }
  };

  checkRectX = (pMin, pMax) => {
    const { list } = this.props;
    if (pMin.x > pMax.x) {
      [pMin, pMax] = [pMax, pMin];
    }
    for (let i = pMin.x + 1; i < pMax.x; i++) {
      if (
        this.checkLineX(list, pMin.y, pMin.y, pMin.x, i) &&
        this.checkLineY(list, pMin.y, pMax.y, i, i) &&
        this.checkLineX(list, pMax.y, pMax.y, i, pMax.x)
      ) {
        return true;
      }
    }
    return false;
  };

  render() {
    const { list } = this.props;
    return (
      <div className="Ingredient">
        {list.map((arr, y) => {
          return (
            <div key={y} className="row">
              {arr.map((item, x) => {
                return (
                  <div key={x}>
                    <div className="Item">
                      <button
                        className="ItemButton"
                        // {item.status === false ? "ItemButton" : "ItemButton_"}
                        onClick={() => this.ItemButtonOnClick(x, y, item)}
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
    onItemButtonClick: (x, y, item, xItem1, yItem1, item1) => {
      dispatch(ON_ITEM_BUTTON_CLICK(x, y, item, xItem1, yItem1, item1));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ingredient);
