import React, { Component, PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';

const Temp = (props) => {
  console.log('render App');
    return(<div> {props.val} </div>)
}

class App extends PureComponent {
    state = {
      val: 1
    }

//this hook runs one time after the component is mounted
componentDidMount() {
    setInterval(() => {
      this.setState(() => {
        return {val: 1}
      });
    },2000)
}

/*
shouldComponentUpdate(nextProp, nextState) {
  console.log('next State', nextState);
  console.log('current State', this.state);

    return (this.state.val === nextState.val ? false : true)
}*/

  render() {
    console.log('render method');
    return (
      <div className="App">
        <Temp val={this.state.val} />
      </div>
    );
  }
}

export default App;
