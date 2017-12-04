import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';
class App extends Component {
  render() {
    return (
      <div className="App">
      <a href="https://placeholder.com"><img src="http://via.placeholder.com/350x150"></img></a>
        <Image myImage={ "http://via.placeholder.com/350x150" } />
      </div>
    );
  }
}

export default App;
