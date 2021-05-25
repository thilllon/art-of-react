import React, { Component } from 'react';

// promise 객체를 반환하는 함수만 await 붙여주면됨
// async, await 이용시 await 을 이용해서 promise 객체에서 값을 빼낼수 있음
// promise/then 이용시 계속 then 안에서 동작 처리해줘야함

export class Method2 extends Component {
  state = { SplitMe: null };

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  handleClick = async (e) => {
    e.preventDefault();

    import('./components/SplitMe').then(({ SplitMe }) => {
      debugger;
      this.setState({ SplitMe });
    });

    // const loadedModule = async function () {
    //   // setTimeout(() => {
    //   //   console.log('World!');
    //   // }, 2000);
    //   debugger;
    //   await this.sleep(1000);
    //   const SplitMe = await import('./components/SplitMe');
    //   return SplitMe;
    // };

    // await this.sleep(2000);

    // this.setState({ SplitMe: loadedModule().default });
  };

  // loading = (<div>Loading...</div>);

  render() {
    const { SplitMe } = this.state;
    return (
      <div className='Method2'>
        <button onClick={this.handleClick}>
          <h1>method 2</h1>
        </button>
        {SplitMe && <SplitMe />}
      </div>
    );
  }
}
