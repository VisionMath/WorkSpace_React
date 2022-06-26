import React, { Component, useEffect, useState, useRef } from 'react';
import './App.css';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    // console.log('constructor 1')//mount
    this.state = {
      number2: this.props.initNumber
    }
  }

  componentWillUnmount() {
    // console.log('this.componentWillUnmount');
    alert('this.componentWillUnmount')
  }

  // shouldComponentUpdate() {
  //   console.log('shouldComponentUpdate 1') //update
  //   return true;
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate 3') //update
  // }
  // state = {
  //   number3: this.props.initNumber,
  //   date: new Date().toString()
  // }

  componentDidMount() {
    // console.log('componentDidMount 3')//mount
  }
  render() {
    // console.log('render update 2'); //update
    // console.log('render 2');//mount
    const number1 = this.props.initNumber;
    return (
      <div className='container'>
        <h2>Class Style Component</h2>
        <p>Number:{number1}</p>
        {/* <p>Number:{this.state.number2}</p> */}
        <p>Number:{this.state.number3}</p>
        <button onClick={() => {
          this.setState({
            number3: Math.random()
          })
        }} >랜덤</button>
        <p>Date:{this.state.date}</p>
        <button onClick={() => {
          this.setState({
            date: new Date().toString()
          })
        }} >현재시간</button>
      </div>
    )
  }
}

const FunctionComponent = props => {
  console.log('render 1');

  useEffect(() => { //componentDidMount
    console.log('useEffect 2')
    return () => {
      // console.log('useEffect return')
      alert('useEffect return')
    }
  })
  // const numberState = useState(props.initNumber);
  const number = props.initNumber;
  // const number4 = numberState[0];
  // const setNumber = numberState[1];
  const [number4, setNumber] = useState(props.initNumber);
  const [date, setDate] = useState(new Date().toString());
  return (
    <div className='container'>
      <h2>Function Style Component</h2>
      <p>Number:{number}</p>
      <p>Number:{number4}</p>
      <button onClick={() => {
        setNumber(Math.random());
      }}>랜덤</button>
      <p>Date:{date}</p>
      <button onClick={() => {
        setDate(new Date().toString());
      }}>현재시간</button>
    </div >
  )
}

// const square = number => {
//   square = number * number;
//   return square;
// }
class ClassCounter extends Component {
  state = { count: 0 }
  componentDidUpdate() {
    setTimeout(() => {
      console.log(`${this.state.count}`);
    }, 1000);
  }
  render() {
    return (
      <>
        <button onClick={() => {
          this.setState({ count: this.state.count + 1 })
        }}>Class Click</button>
      </>
    )
  }
}

const FunctionCounter = () => {
  const [count, setCount] = useState(0);
  const lastestCount = useRef();
  useEffect(() => {
    lastestCount.current = count;
    setTimeout(() => {
      console.log(`${lastestCount.current}`);
    }, 1000)
  });
  return (
    <>
      <button onClick={() => {
        setCount(count + 1);
      }}>Function Click</button>
    </>
  )
}

const App = () => {
  const [show, setShow] = useState(true);
  const [funShow, setFunShow] = useState(true);
  return (
    <div className="container">
      <h1>class Component and function Component</h1>
      {show ? <ClassComponent initNumber={2}></ClassComponent> : null}
      {funShow ? <FunctionComponent initNumber={2}></FunctionComponent> : null}
      <FunctionComponent initNumber={2}></FunctionComponent>
      <button onClick={() => {
        show ? setShow(false) : setShow(true)
      }}>클래스 show </button>
      <ClassCounter />
      <FunctionCounter />
      {/* <p>제곱:{square(4)}</p> */}
    </div>
  )
}

export default App;