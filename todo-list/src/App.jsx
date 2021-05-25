import React, { Component } from 'react';
import faker from 'faker';
import Phonebook from './phonebook';
import ToDoList from './todo-list';
import CodeSplit from './code-split';
class App extends Component {
  render() {
    return (
      <>
        <ToDoList />
        <Phonebook />
        <CodeSplit />
      </>
    );
  }
}

export default App;
