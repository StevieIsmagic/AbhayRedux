import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let i = 1;
    let myStyle = {
      fontSize: 20,
      color: 'red'
    };
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro" >
          <h1> What is JSX</h1>
          <p> in this lecture we will go over the JSX tags </p>
        </p>
        <h4 style={myStyle}> HEEEY WORLD!</h4>
        <p> {1+1}</p>
        <p>{ i===2 ? 'TRUE' : 'FALSE' }</p>
        { // YEEE A SINGLE LINE COMMENT
        }
        {/* yee 
        
        multiline dawg
        */}
      </div>
    );
  }
}

export default App;
