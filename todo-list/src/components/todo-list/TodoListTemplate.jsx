import React from 'react';
import './TodoListTemplate.css';

export const TodoListTemplate = ({ form, children }) => {
  return (
    <main className='todo-list-template'>
      {/* <div className='title'>To Do List</div> */}
      <section className='form-wrapper'>{form}</section>
      <section className='todos-wrapper'>{children}</section>
    </main>
  );
};
