import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor(){
    super();
    this.state = {
      userInput: ""
    }
  }
  updateHeader(str){
    this.setState({userInput : str})
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <input id="user input" onChange={e => {this.updateHeader(e.target.value);}}/>
        <p className="App-intro">{this.state.userInput}</p>
      </div>
    );
  }
}

export default App;
