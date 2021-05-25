import React, { Component } from 'react';

// Higher Order Component

export const withSplitting = (importComponent) => {
  class WithSplitting extends Component {
    state = { Splitted: null };

    constructor(props) {
      super(props);
      importComponent()
        .then(({ Splitted }) => {
          // debugger;
          this.setState({ Splitted });
        })
        .catch((err) => console.error(err));
    }

    render() {
      const { Splitted } = this.state;
      // return Splitted ? <Splitted {...this.props} /> : null;
      if (!Splitted) return null;
      return <Splitted {...this.props} />;
    }
  }

  return WithSplitting;
};
