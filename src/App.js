import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerText: "Howdy, Welcome!",
      contentText: "In this lecture we will go over Component State"
    };
  }
  render() {
    return (
      <div className="App">
      <h1> {this.state.headerText} </h1>
      <h1> {this.state.contentText} </h1>

        {/* <Header />
        <Content /> */}
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <p className="App-intro" >
      <h1> What is JSX</h1>
      <p> in this lecture we will go over the JSX tags </p>
      </p>
    );
  }
}

export default App;
