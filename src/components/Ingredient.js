import React, { Component } from "react";
import "./style.css";
import ViewGame from "./ViewGame";
//React-Redux --- npm install react-redux
import { connect } from "react-redux";
//Redux
import { ON_ITEM_BUTTON_CLICK } from "../actions/index";

class Ingredient extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     item1: null,
  //     xItem1: null,
  //     yItem1: null,
  //   };
  // }

  // ItemButtonOnClick = (x, y, item) => {
  //   const { item1, xItem1, yItem1 } = this.state;
  //   if (!item1) {
  //     this.setState({ item1: item, xItem1: x, yItem1: y });
  //   } else {
  //     if (
  //       (x === xItem1 && this.checkLineX(yItem1, y, x, xItem1)) ||
  //       (y === yItem1 && this.checkLineY(xItem1, x, y, yItem1)) ||
  //       this.checkRectX(yItem1, xItem1, y, x)
  //     ) {
  //       // console.log("tmdk");
  //       const { onItemButtonClick } = this.props;
  //       onItemButtonClick(x, y, item, xItem1, yItem1, item1);
  //     }
  //     this.setState({
  //       item1: null,
  //       xItem1: null,
  //       yItem1: null,
  //     });
  //   }
  // };
  // //  an theo cot
  // checkLineX = (yItem1, y, x, xItem1) => {
  //   const { list } = this.props;
  //   let min = Math.min(yItem1, y);
  //   let max = Math.max(yItem1, y);
  //   if (
  //     x === xItem1 &&
  //     list[yItem1][x].id === list[y][x].id
  //     // && max - min === 1
  //   ) {
  //     for (let i = min + 1; i < max; i++) {
  //       if (!list[x][i].status) {
  //         return false;
  //       }
  //     }
  //     return true;
  //   }
  // };
  // // an theo hang
  // checkLineY = (xItem1, x, y, yItem1) => {
  //   const { list } = this.props;
  //   let min = Math.min(xItem1, x);
  //   let max = Math.max(xItem1, x);
  //   if (
  //     y === yItem1 &&
  //     list[y][xItem1].id === list[y][x].id
  //     // && max - min === 1
  //   ) {
  //     for (let i = min + 1; i < max; i++) {
  //       if (!list[y][i].status) {
  //         return false;
  //       }
  //     }
  //     return true;
  //   }
  // };
  // an theo chu z
  // checkRectX = (yItem1, xItem1, y, x) => {
  //   const { list } = this.props;
  //   console.log({ yItem1 }, { xItem1 });
  //   console.log({ y }, { x });
  //   // if(list[yItem1] > list[y]){
  //   //   for(){}
  //   // }
  // };

  render() {
    const { list } = this.props;
    return (
      <div className="Ingredient">
        {list.map((arr, x) => {
          return (
            <div key={x} className="row">
              {arr.map((item, y) => {
                return <ViewGame key={y} x={x} y={y} item={item} />;
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
