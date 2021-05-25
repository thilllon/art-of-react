import React, { Component } from 'react';
import faker from 'faker';
import ToDoList from './components/todo-list';
import HelloReact from './components/hello-react';
class App extends Component {
  render() {
    return (
      <>
        <ToDoList />
        <HelloReact />
      </>
    );
  }
}

export default App;
