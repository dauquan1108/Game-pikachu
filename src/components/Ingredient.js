import React, { Component } from "react";
import "./style.css";
import ViewGame from "./ViewGame";
//React-Redux --- npm install react-redux
import { connect } from "react-redux";

class Ingredient extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className="Ingredient">
        {list.list.map((arr, x) => {
          return (
            <div key={x} className="row">
              {arr.map((item, y) => {
                const itemNew = { ...item };
                return <ViewGame key={y} item={itemNew} x={x} y={y} />;
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

export default connect(mapStateToProps, null)(Ingredient);
