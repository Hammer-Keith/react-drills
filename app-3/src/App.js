import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
    arr: [
      "one",
      "two",
      "three",
      "four",
      "five"
    ],
    visList:""
  }
  }

updateFilter(str){
  var x = "";
  for(var i = 0;i<this.state.arr.length;i++){
    if(this.state.arr[i].includes(str)){
      x+= this.state.arr[i] + "\n";
    }
  }
  this.setState({visList:x})
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <input id="filterInput" onChange={(e) => {this.updateFilter(e.target.value);}}/>
        <p className="App-intro">
          {this.state.visList}
        </p>
      </div>
    );
  }
}

export default App;
