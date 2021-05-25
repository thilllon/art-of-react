import React, { useState, Suspense } from 'react';

const LazySplitMe = React.lazy(() => {
  const SplitMe = import('./components/SplitMe');
  // SplitMe.then((res) => {
  //   console.info(res);
  // });
  return SplitMe;
});

export const Method3 = () => {
  const [visible, setVisible] = useState(false);

  const onClick = (ev) => {
    ev.preventDefault();
    setVisible(true);
  };

  const fallback = <div>Loading...</div>;

  return (
    <div className='Method3'>
      <button onClick={onClick}>
        <h1>method 3</h1>
      </button>
      <Suspense fallback={fallback}>{visible && <LazySplitMe />}</Suspense>
    </div>
  );
};
