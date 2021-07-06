import React, { useState } from 'react';
// for component optimization, use react.memo

const TodoItem = React.memo(({ todo, onToggle }) => {
  return (
    <li style={{ textDecoration: todo.done ? 'line-through' : 'none' }} onClick={() => onToggle(todo.id)}>
      {todo.text}
    </li>
  );
});

const TodoList = React.memo(({ todos, onToggle }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
});

const Todos = ({ todos, onCreate, onToggle }) => {
  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault(); // prevent refreshing
    onCreate(text);
    setText('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={text} placeholder={'input todos...'} onChange={onChange}></input>
        <button type='submit' disabled={text?.length > 0 ? false : true}>
          Register
        </button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} />{' '}
    </div>
  );
};
export default Todos;
