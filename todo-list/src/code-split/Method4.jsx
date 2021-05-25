// using HOC

import React, { Component } from 'react';
import { withSplitting } from './hoc/withSplitting';

const SplitMe = withSplitting(() => import('./components/SplitMe'));

export class Method4 extends Component {
  state = { visible: false };
  handleClick = () => {
    this.setState({ visible: true });
  };
  render() {
    const { visible } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>
          <h1>method 4</h1>
        </button>
        {visible && 'visible'}
        {visible && <SplitMe />}
      </div>
    );
  }
}
