import React, { Component } from "react";
import "./App.css";
import Ingredient from "../src/components/Ingredient";
class App extends Component {
  constructor() {
    super();
    this.state = {
      status: true,
    };
  }
  buttonClick = () => {
    this.setState({ status: !this.state.status });
  };
  render() {
    const check = this.state.status ? " App" : " App_";
    const status = this.state.status ? "Button-Color" : "Button-Color_";
    return (
      <div className={check}>
        <div className="Button">
          <button className={status} onClick={this.buttonClick}>
            {this.state.status ? " light" : " dark"}
          </button>
        </div>
        <div className="Content">
          <Ingredient />
        </div>
      </div>
    );
  }
}
export default App;
