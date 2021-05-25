import React, { Component } from 'react';
import { Method1 } from './Method1';
import { Method2 } from './Method2';
import { Method3 } from './Method3';
import { Method4 } from './Method4';

const asyncTest = () => {
  const res = Promise.resolve(1111);
  const rej = Promise.reject(2222);

  const testPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      res.then((val) => console.log('then', val));
      res.catch((val) => console.log('catch', val));
      rej.then((val) => console.log('then', val));
      rej.catch((val) => console.log('catch', val));
    }, 1000);
    return resolve();
  });

  testPromise.then((val) => {
    console.log(val);
  });
};

// asyncTest();

export default class CodeSplit extends Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      <div>
        <Method1 />
        <Method2 />
        <Method3 />
        <Method4 />
      </div>
    );
  }
}
