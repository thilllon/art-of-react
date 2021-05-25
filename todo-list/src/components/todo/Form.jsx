import React from 'react';
import './TodoListTemplate.css';

export const Form = ({ value, onKeyPress, onChange, onCreate }) => {
  const onSubmit = (ev) => ev.preventDefault();
  return (
    <form onSubmit={onSubmit}>
      <input value={value} onKeyPress={onKeyPress} onChange={onChange} />
      <button onClick={onCreate} disabled={!value}>
        Create
      </button>
    </form>
  );
};
