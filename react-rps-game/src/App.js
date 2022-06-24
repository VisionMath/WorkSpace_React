import React, { Component } from 'react';
import './App.css';

class RPS extends Component {
  render() {
    return (
      <div >
        <img src="scissors.png" alt="" className='rps' id="0" onClick={() => {
          document.getElementById("1").style.display = "none";
          document.getElementById("2").style.display = "none";
          this.props.onSelect("0");
          console.log(document.getElementsByClassName('rps'));
          document.getElementById("0").className = "rpsAni";
          const rpsAni = document.querySelector('.rpsAni');
          rpsAni.style.animationPlayState = "running";

        }}></img>
        <img src="rock.png" alt="" className='rps' id="1" onClick={() => {
          document.getElementById("0").style.display = "none";
          document.getElementById("2").style.display = "none";
          this.props.onSelect("1");
          document.getElementById("1").className = "rpsAni";
          const rpsAni = document.querySelector('.rpsAni');
          rpsAni.style.animationPlayState = "running";
        }}></img>
        <img src="paper.png" alt="" className='rps' id="2" onClick={() => {
          document.getElementById("0").style.display = "none";
          document.getElementById("1").style.display = "none";
          this.props.onSelect("2");
          document.getElementById("2").className = "rpsAni";
          const rpsAni = document.querySelector('.rpsAni');
          rpsAni.style.animationPlayState = "running";
        }}></img>
      </div >
    )
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      you: "---",
      com: "---",
      result: "선택해주세요."
    }
  }


  render() {
    const rpsString = id => {
      return id === 0 ? "가위" : id === 1 ? "바위" : "보";
    }
    return (
      <div className="App">
        <h1>가위바위보 게임</h1>
        <RPS onSelect={id => {
          var youSelect = parseInt(id);
          var comSelect = parseInt(Math.random() * 3);
          var resultString = (youSelect + 1) % 3 === comSelect ? "졌습니다." : youSelect === comSelect ? "비겼습니다." : "이겼습니다.";
          var youString = rpsString(youSelect);
          var comString = rpsString(comSelect);
          this.setState({ you: youString, com: comString, result: resultString })
        }} />
        <h1>당신:{this.state.you} 컴퓨터:{this.state.com} </h1>
        <h1>{this.state.result}</h1>
        <button onClick={() => {
          window.location.reload();
        }}>다시하기</button>
      </div>
    );
  }

}

export default App;
