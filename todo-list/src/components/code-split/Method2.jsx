import React, { Component, useState, Suspense } from 'react';

class Method2 extends Component {
  state = {
    SplitMe: null,
  };

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  handleClick = async (e) => {
    // promise 객체를 반환하는 함수만 await 붙여주면됨
    e.preventDefault();

    // ************************

    const aa = Promise.resolve(1111);
    const bb = Promise.reject(2222);
    // debugger;
    const promise1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        aa.then((val) => console.log('then', val));
        aa.catch((val) => console.log('catch', val));
        bb.then((val) => console.log('then', val));
        bb.catch((val) => console.info('catch', val));
      }, 1000);
      return resolve();
    });

    promise1.then((vals) => {
      console.log('aaaaaaaaaaaaaaaa');
    });

    return;
    // async function four() {
    //     console.log('  I am four');
    //     return 4;
    // }

    // // async, await 이용시 await 을 이용해서 promise 객체에서 값을 빼낼수 있음
    // var a = await four();
    // console.info(a);

    // // promise/then 이용시 계속 비동기 콜백 안에서 동작 처리해줘야함
    // // var b = four().then((res) => res);
    // // console.info(b);
    // // debugger;
    // // var c = four().resolve();
    // // console.info(c);

    // // ************************
    // const promise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve([89, 45, 323]);
    //     }, 5000);
    // });
    // // debugger;
    // promise.then((values) => {
    //     console.log(values[1]);
    //     return values;
    // });
    // console.info('************************');
    // console.info('************************');
    // console.info('************************');
    // // ************************
    // promise.then((values) => {
    //     console.log(values[1]);
    //     return values;
    // });
    // console.info('************************');
    // console.info('************************');
    // console.info('************************');
    // // ************************
    // promise.then((values) => {
    //     console.log(values[1]);
    //     return values;
    // });
    // console.info('************************');
    // console.info('************************');
    // console.info('************************');
    // // ************************
    // promise.then((values) => {
    //     console.log(values[1]);
    //     return values;
    // });
    // console.info('************************');
    // console.info('************************');
    // console.info('************************');
    // // ************************

    // // debugger;
    // return;

    // debugger;
    // const loadedModule = await function () {
    // setTimeout(() => {
    //     console.log('World!');
    // }, 2000);
    // this.sleep(2000);
    // import('./SplitMe');
    // };
    // await console.info('1');
    // await this.sleep(2000);
    // await console.info('2');
    // const loadedModule = await import('./SplitMe');
    // // const loadedModule = import('./SplitMe');
    // await console.info('3');

    // console.info('loadedModule before setState', loadedModule);
    // this.setState({
    //   SplitMe: loadedModule.default,
    // });
    // console.info('loadedModule after setState', loadedModule);
  };

  render() {
    const { SplitMe } = this.state;
    return (
      <div className='Method2'>
        <a href='/' onClick={this.handleClick}>
          Hello React!
        </a>
        {SplitMe ? <SplitMe /> : <div>Loading...</div>}
      </div>
    );
  }
}

export default Method2;
