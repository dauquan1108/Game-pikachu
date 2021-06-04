import React, { Component } from "react";
import "./style.css";
import ViewGame from "./ViewGame";
//React-Redux --- npm install react-redux
import { connect } from "react-redux";

class Ingredient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item1: null,
    };
  }
  render() {
    const text = (item2) => {
      const { item1 } = this.state;
      if (item1 === null) {
        this.setState({ item1: item2 });
      } else {
        console.log({ item1 }, { item2 });
        this.setState({
          item1: null,
        });
      }
    };
    const { totalList } = this.props;
    console.log({ totalList });
    return (
      <div className="Ingredient">
        <p>h</p>
        {totalList.list &&
          totalList.list.map((arr, x) => {
            return (
              <div key={x} className="row">
                {arr.map((item, y) => {
                  const itemNew = { ...item };
                  return (
                    <ViewGame text={text} key={y} item={itemNew} x={x} y={y} />
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
    totalList: state.StoreReducers,
  };
};

export default connect(mapStateToProps, null)(Ingredient);
