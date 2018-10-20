import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Button from './Button/Button';
import './App.css';

class App extends Component {
  state = {
    username: 'Nena',
    username2: 'Jenka'
  };

  changeNameHandler = (event) => {
    this.setState({ username: event.target.value })
  };

  changeNameButtonHandler = () => {
    this.setState({ username2: this.state.username })
  };

  buttonTest = () => {
    console.log("Clicked");
  };

  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username2}/>
        <UserInput 
          change={this.changeNameHandler}
          curentName={this.state.username}  
        />
        <Button
          click={this.changeNameButtonHandler}
          buttonText={"Change name"}
        />
        <button onClick={this.buttonTest}>ButtonTest</button>
      </div>
    );
  };
};

export default App;