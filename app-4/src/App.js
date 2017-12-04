import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      userName:"",
      passWord:""
    }
  }
  updateUser(str){
  this.setState({userName:str})
  }
  updatePass(str){
  this.setState({passWord:str})
  }
  userPassCheck(us, ps){
  if(us === ''){
    alert("Please enter a Username")
    return ""
  }
  else if(ps === ""){
  alert("Please enter a Password")
  }
  else{
  alert("Username: " + us + "Password:" + ps)
  }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p></p>
          <input id="userinput" onChange={(e) => {this.updateUser(e.target.value);}}></input>
          <p></p>
          <input id="passinput" onChange={(e) => {this.updatePass(e.target.value);}}></input>
          <p></p>
          <button id="finbut" onClick={(e) => {this.userPassCheck(this.state.userName, this.state.passWord)}}>Enter</button>
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">        </p>
      </div>
    );
  }
}

export default App;
