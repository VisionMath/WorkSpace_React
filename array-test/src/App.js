import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    arr: [],
  };

  pushNumber = () => {
    const a = [];
    for (let i = 0; i < 10; i++) {
      a.push(i);
    }
    this.setState({ arr: a });
  };

  componentDidMount() {
    this.pushNumber();
  }
  render() {
    console.log("array: " + this.state.arr + " end");
    return <></>;
  }
}

export default App;
