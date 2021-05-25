import React, { Component } from 'react';
import faker from 'faker';
import { Form } from './components/todo/Form';
import { TodoItemList } from './components/todo/TodoItemList';
import { TodoListTemplate } from './components/todo/TodoListTemplate';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  state = {
    input: '',
    todos: Array(3)
      .fill(0)
      .map(() => ({
        id: faker.git.shortSha(),
        text: faker.lorem.sentence(),
        checked: faker.datatype.boolean(),
      })),
  };

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  handleCreate() {
    this.setState({
      input: '',
      todos: this.state.todos.concat({
        id: faker.git.shortSha(),
        text: this.state.input,
        checked: false,
      }),
    });
  }

  handleKeyPress(e) {
    if (this.state.input && e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleRemove(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }

  handleToggle(id) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        } else {
          return todo;
        }
      }),
    });
  }

  render() {
    return (
      <TodoListTemplate
        form={
          <Form
            value={this.state.input}
            onKeyPress={this.handleKeyPress}
            onChange={this.handleChange}
            onCreate={this.handleCreate}
          />
        }
      >
        <TodoItemList
          todos={this.state.todos}
          onToggle={this.handleToggle}
          onRemove={this.handleRemove}
        />
      </TodoListTemplate>
    );
  }
}

export default App;
