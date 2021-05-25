import React, { Component, useState, Suspense } from 'react';

export const Method1 = () => {
  const onClick = (ev) => {
    ev.preventDefault();

    import('./util')
      .then((module) => {
        module.logDate();
        return module;
      })
      .then((module) => {
        const notify = module.default;
        notify();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className='Method1'>
      <button onClick={onClick}>
        <h1>method 1</h1>
      </button>
    </div>
  );
};
