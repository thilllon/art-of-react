import React, { Component } from "react";

class PhoneForm extends Component {
  state = {
    name: "",
    phone: ""
  };
  handleChange = e => {
    console.info("##", [e.target.name], e.target.value);
    this.setState({
      //   name: e.target.value
      //   phone:e.target.value
      [e.target.name]: e.target.value || ""
    });
    // value={this.state.fields.name || ''}   // (undefined || '') = ''
  };
  handleSubmit = e => {
    // debugger;
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onRegister 를 통하여 부모에게 전달
    this.props.onRegister(this.state);
    // 상태 초기화
    this.setState({
      name: "",
      phone: ""
    });
  };

  render() {
    console.info("render");
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />

        {/* <div>{this.state.name}</div>
        <div>{this.state.phone}</div> */}
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default PhoneForm;
