import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerText: "Howdy, Welcome Yeee state from parent <App /> was sent as props to its child <Header/>!",
      contentText: "In this lecture we will go over Component State"
    };
  }
  render() {
    return (
      <div className="App">
        <Header header={this.state.headerText}/>
        <Content content={this.state.contentText}/>
        <Clock />

        {/* {this.props.header} <br ></br>
        {this.props.content} */}
      </div>
    );
  }
}

App.defaultProps = {
  header: 'default props for header..',
  content: "default props for content.."

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
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      count: 0
    };
  }
  render() {
    return (
      <div className="App-intro" >
        <h1> Components API</h1>
        <button conClick={this.updateMyState}>click meeee! </button>
        <h4>State Data: {this.state.data}</h4>
      </div>  
    );
  }
}

class TableRow extends Component {
  render() {
    return (
      <tr> 
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    );
  }
}

export default App;
