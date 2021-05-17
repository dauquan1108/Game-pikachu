import React, { Component } from "react";
import "./style.css";
//React-Redux --- npm install react-redux
import { connect } from "react-redux";

class Ingredient extends Component {
  render() {
    const { list } = this.props;
    console.log({ list });
    return (
      <div className="Ingredient">
        {list.map((arr, index) => {
          return (
            <div key={index} className="row">
              {arr.map((item, indexItem) => {
                return (
                  <div key={indexItem}>
                    <div className="Item">
                      <button className="ItemButton">{item}</button>
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

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, null)(Ingredient);
