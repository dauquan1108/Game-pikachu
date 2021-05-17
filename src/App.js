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
    return (
      <div className={check}>
        <div className="Button">
          <button className="Button-Color" onClick={this.buttonClick}>
            Button
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
