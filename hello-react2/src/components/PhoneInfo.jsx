// file: src/components/PhoneInfo.js
import React, { Component } from "react";

class PhoneInfo extends Component {
  state = {};
  static defaultProps = {
    info: {
      name: "이름",
      phone: "010-0000-0000",
      id: 0,
    },
  };

  handgleToggleEdit = () => {};
  render() {
    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px",
    };

    const { name, phone, id } = this.props.info;

    return (
      <div style={style}>
        <div>
          <b>{name}</b>
        </div>
        <div>{phone}</div>
        <div>
          <button onClick={this.handleToggleEdit}>수정</button>
          <button>삭제</button>
        </div>
      </div>
    );
  }
}

export default PhoneInfo;
