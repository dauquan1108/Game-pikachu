import React, { Component } from "react";
import "./style.css";
//React-Redux --- npm install react-redux
import { connect } from "react-redux";

class Ingredient extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     status: false,
  //   };
  // }
  // ItemButtons = () => {
  //   this.setState({
  //     status: !this.state.status,
  //   });
  // };
  render() {
    const { list } = this.props;
    // const checkStatus = this.state.status ? "Item" : "Item_";
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
                        // onClick={() =>
                        //   this.ItemButtons(list, arr, index, item, indexItem)
                        // }
                      >
                        {/* {item} */}
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

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, null)(Ingredient);
