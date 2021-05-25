import React, { Component, useState, Suspense } from 'react';

const LazySplitMe = React.lazy(() => import('./LazySplitMe'));

function Method3() {
  const [visible, setVisible] = useState(false);
  const onClick = (ev) => {
    ev.preventDefault();
    setVisible(true);
  };

  return (
    <div className='Method3'>
      <h1>
        <a onClick={onClick}>Hello React!</a>
      </h1>
      <Suspense fallback={<div>loading...</div>}>
        {visible && <LazySplitMe />}
      </Suspense>
    </div>
  );
}

export default Method3;
