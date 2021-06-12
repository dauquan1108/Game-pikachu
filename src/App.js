import React, { Component } from "react";
import "./App.css";
// import Ingredient from "../src/components/Ingredient";
import Test from "../src/components/Test";

class App extends Component {
  constructor() {
    super();
    this.state = {
      status: true,
    };
  }

  buttonClick = () => {
    this.setState((prevState) => ({
      status: !prevState.status,
    }));
  };

  render() {
    const { status } = this.state;

    const styleApp = status ? "ClassApp App_" : "ClassApp App";
    const styleBtn = status
      ? "ClassButton-Color Button-Color_"
      : "ClassButton-Color Button-Color";
    return (
      <div className={styleApp}>
        <div className="Button">
          <button className={styleBtn} onClick={this.buttonClick}>
            {status ? " light" : " dark"}
          </button>
        </div>
        <div className="Content">
          <Test status={status} />
        </div>
      </div>
    );
  }
}

export default App;
