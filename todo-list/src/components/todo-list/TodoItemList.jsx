import React from 'react';
import './TodoItemList.scss';

export const TodoItemList = ({ todos, onToggle, onRemove }) => {
  return (
    <div id='todoItemList'>
      {todos.map((todo, idx) => (
        <div key={idx + ''}>
          <input
            id={todo.id}
            type='checkbox'
            checked={todo.checked}
            onChange={() => onToggle(todo.id)}
          />
          <label htmlFor={todo.id}>{todo.text}</label>
          <button onClick={() => onRemove(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
