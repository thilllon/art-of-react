import React, { Component, useState, Suspense } from 'react';

export const Method1 = () => {
  const onClick = (ev) => {
    ev.preventDefault();

    import('./util')
      .then((importModule) => {
        importModule.logDate();
        return importModule;
      })
      .then((importModule) => {
        const notify = importModule.default();
        return notify;
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
