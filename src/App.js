import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Button from './Button/Button';
import './App.css';

class App extends Component {
  state = {
    username: 'Nena',
    username2: 'Jenka',
    hideshowme: false
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

  hideShowMe = () => {
    const hideShow = this.state.hideshowme;
    this.setState({ hideshowme: !hideShow })
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
        { 
          this.state.hideshowme ?
            <div className="hideShow">
              <p>Hide or show me</p>
            </div> : null
        }
        <Button
          click={this.hideShowMe}
          buttonText={"Hide or show me"}
        />
      </div>
    );
  };
};

export default App;