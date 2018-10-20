import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Button from './Button/Button';
import Person from './Person/Person';
import Person2 from './Person2/Person2';
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
    showPersons: false,
    persons2: [
      { name: 'Knut', age: 30 },
      { name: 'Per', age: 43 },
      { name: 'Lisa', age: 18 }
    ],
    showPersons2: false
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

  togglePersonsHandler2 = () => {
    const doesShow = this.state.showPersons2;
    this.setState({ showPersons2: !doesShow });
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

    let persons2 = null;

    if(this.state.showPersons2) {
      persons2 = (
        <div>
          {this.state.persons2.map(person2 => {
            return <Person2 
              name={person2.name} 
              age={person2.age}
            />
          })}
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
        <Button 
          style={style}
          buttonText={"Toggle Persons2"}
          click={this.togglePersonsHandler2}
        />
        {persons}
        {persons2}
      </div>
    );
  };
};

export default App;