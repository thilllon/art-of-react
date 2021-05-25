import React, { Component, useState, Suspense } from 'react';
import Method1 from './Method1';
import Method2 from './Method2';
import Method3 from './Method3';

const CodeSplit = () => {
  return (
    <div>
      <Method1 />
      {/* <Method2 /> */}
      {/* <Method3 /> */}
    </div>
  );
};

export default CodeSplit;
