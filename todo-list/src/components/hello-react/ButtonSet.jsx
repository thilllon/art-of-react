import React, { Component } from "react";

class ButtonSet extends Component {
  // state
  // props

  static defaultProps = {
    //
  };
  render() {
    return (
      <div>
        <button onClick={this.props.onToggleEditData}>수정</button>
        <button onClick={this.props.onDeleteData}>삭제</button>
      </div>
    );
  }
}

export default ButtonSet;
