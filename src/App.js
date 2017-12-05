import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
    this.updateMyState = this.updateMyState.bind(this);
    this.forceUpdateRandomNumber = this.forceUpdateRandomNumber.bind(this);
    this.findMyDOMNode = this.findMyDOMNode.bind(this);
  }
  updateMyState() {
    var count = this.state.count;
    count++;
    var item = "Click - "+count;
    var myArray = this.state.data;
    myArray.push(item);
    this.setState({data: myArray, count: count})

  }
  forceUpdateRandomNumber(){
    this.forceUpdate();
  }
  findMyDOMNode(){
    var myDiv = document.getElementById('myDiv');
    ReactDOM.findDOMNode(myDiv).style.color = 'red';
  }

  render() {

    return (
      <div className="App-intro" >
        <h1> Components API</h1>
        <button onClick={this.updateMyState}>click meeee! </button>
        <h4>State Data: {this.state.data}</h4>
        <button onClick={this.forceUpdateRandomNumber}> Random Number:</button>
        <h4> Random Number: {Math.random()} </h4>
        <button onClick={this.findMyDOMNode}>Find My DOM NODE</button>
        <div id="myDiv">This is my DIV</div>
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
