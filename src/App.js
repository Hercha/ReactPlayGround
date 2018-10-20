import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Button from './Button/Button';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    username: 'Nena',
    username2: 'Jenka',
    hideshowme: false,
    persons: [
      { name: 'Knut', age: 30 },
      { name: 'Per', age: 43 },
      { name: 'Lisa', age: 18 }
    ],
    showPersons: false
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

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age:28 },
        { name: 'Per', age:43 },
        { name: 'Lisa', age:28 }
      ]
    })
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Knut', age: 28 },
        { name: event.target.value, age: 28 },
        { name: 'Lisa', age: 28 },
      ]
    })
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid green',
      padding: '8px',
      cursor: 'pointer'
    };

    let showHide = null;

    if(this.state.hideshowme) {
      showHide = (
        <div className="hideShow">
          <p>Hide or show me</p>
        </div>
      );
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          <Person 
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person 
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Tess')}
            changed={this.nameChangedHandler}
          >
          My Hobbies: Drawing
          </Person>
          <Person 
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      );
    };

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
        {showHide}
        <Button
          click={this.hideShowMe}
          buttonText={"Hide or show me"}
        />
        <Button 
          style={style}
          buttonText={"Toggle Persons"}
          click={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  };
};

export default App;