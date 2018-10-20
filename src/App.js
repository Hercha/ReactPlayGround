import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import ChangeNameButton from './ChangeNameButton/ChangeNameButton';
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

  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username2}/>
        <UserInput 
          change={this.changeNameHandler}
          curentName={this.state.username}  
        />
        <ChangeNameButton
          click={this.changeNameButtonHandler}
        />
        <button onClick={this.changeNameButtonHandler}>ButtonTest</button>
      </div>
    );
  };
};

export default App;

/*
Create TWO new components: UserInput and UserOutput
UserInput should hold an input element, UserOutput two paragraphs
Output multiple UserOutput components in the App component (any paragraph texts of your choice)
Pass a username (of your choice) to UserOutput via props and display it there
Add state to the App component (=> the username) and pass the username to the UserOutput component
Add a method to manipulate the state (=> an event-handler method)
Pass the event-handler method reference to the UserInput component and bind it to the input-change event
Ensure that the new input entered by the user overwrites the old username passed to UserOutput
Add two-way-binding to your input (in UserInput) to also display the starting username
Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets
*/