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
    
        <Header />
        <Content />
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
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          "id": 1,
          "name": "Foo",
          "age": 30
        },
        {
          "id": 2,
          "name": "Bar",
          "age": 20
        },
        {
          "id": 3,
          "name": "Baz",
          "age": 35
        }
      ]
    }
  }
  render() {
    return (
      <p className="App-intro" >
        <h1> What is JSX</h1>
        <p> in this lecture we will go over the JSX tags </p>
        <table> 
          <thead>
            <th>
              <td>ID</td>
              <td>NAME</td>
              <td>AGE</td>
            </th>
          </thead>
          <tbody>
            {this.state.data.map((person, i) => <TableRow key={i} data={person}/>)}
          </tbody>
        </table>
      </p>
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
