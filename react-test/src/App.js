import React, { Component } from 'react';
import './App.css';

class Like extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "unlike.jpg",
      isLike: ""
    }
  }

  render() {
    const likeStyle = {
      display: "none"
    }
    return (
      <div align="left">
        <img
          src={this.state.image}
          className="like"
          onClick={() => {
            console.log("click");
            this.setState({
              image: this.state.image === "like.png"
                ? "unlike.jpg"
                : "like.png"
            })
          }}></img>

        <img id="unlike"
          src="unlike.jpg"
          className="like"
          onClick={() => {
            this.props.onLike("unlike");
            this.setState({ isLike: "좋아요" })
          }}></img>

        <img id="like"
          src="like.png"
          className="like"
          style={likeStyle}
          onClick={() => {
            this.props.onLike("like");
            this.setState({ isLike: "안좋아요" })
          }}></img>
        <h1>좋아요 상태:{this.state.isLike}</h1>
      </div >
    )
  }
}

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateTest: 1234
    }
  }
  render() {
    return (
      <div align="left">
        <h1>{this.props.propsTest}</h1>
        <h1>행운의 숫자는: {this.state.stateTest}</h1>
        <button
          onClick={() => {
            this.setState({
              stateTest: this.state.stateTest + 1
            })
          }}>플러스</button>
      </div>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Test propsTest="테스트입니다." />
        <Like onLike={id => {
          document.getElementById("like").style.display = id === "like" ? "none" : "inline";
          document.getElementById("unlike").style.display = id === "unlike" ? "none" : "inline";
        }
        } />
      </div>
    );
  }
}
export default App;