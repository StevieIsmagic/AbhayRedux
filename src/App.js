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

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      count: 0
    };
  }
  componentDidMount() {
    this.timeID = setInterval(
      () => {this.tick()}
      , 1000)
  }
  tick() {
    this.setState({ 
      date: new Date(),
      count: this.state.count + 1
    });
  }
  componentWillUnmount() {
    clearInterval(this.timeID)
  }

  render() {
    return (
      <div>
        <h2> The time is: {this.state.date.toLocaleTimeString()}</h2>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {this.props.header}
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
        {this.props.content}
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
