import React, { Component, useState, Suspense } from 'react';

const LazySplitMe = React.lazy(() => import('./LazySplitMe'));

function Method1() {
  const onClick = (ev) => {
    ev.preventDefault();

    // import('./notify').then((result) => result.default());
    import('./notify')
      .then((importModule) => {
        importModule.showDate();
        return importModule;
      })
      .then((importModule) => importModule.default());
  };
  return (
    <div className='Method1'>
      <h1>
        <a href='#' onClick={onClick}>
          Hello React!
        </a>
      </h1>
    </div>
  );
}

export default Method1;
