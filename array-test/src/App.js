import React, { Component } from "react";

class App extends Component {
  state = {
    arr: [],
  };

  // pushNumber = () => {
  //   // const a = [];
  //   for (let i = 0; i < 10; i++) {
  //     // this.state.arr = [...this.state.arr, i];
  //     this.state.arr = [...this.state.arr, i];
  //     //   a.push(i);
  //   }
  //   // this.setState({ arr: a });
  // };
  constructor() {
    super();
    // componentDidMount() {
    // this.pushNumber();
    for (let i = 0; i < 10; i++) {
      // this.state.arr = [...this.state.arr, i];
      this.state.arr.push(i);
      //   a.push(i);
    }
    // this.setState({ arr: a });
  };

  render() {
    console.log(this.state.arr);
    return <></>;
  }
}

export default App;
