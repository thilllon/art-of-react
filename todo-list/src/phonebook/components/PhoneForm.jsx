import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: '',
  };
  // componentDidUpdate = (a, b, c) => {
  // 	console.info(a, b, c);
  // 	this.nameInput.focus();
  // };
  // componentDidMount = (a, b, c) => {
  // 	console.info(a, b, c);
  // 	this.nameInput.focus();
  // };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (event) => {
    // 페이지 리로딩 방지
    event.preventDefault();

    // console.info(event);
    // console.info(!event.target.value);
    // if (!event.target.value) {
    // 	return;
    // }
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      name: '',
      phone: '',
    });
  };
  // autoFocus
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder='이름'
          value={this.state.name}
          onChange={this.handleChange}
          name='name'
        />
        <input
          placeholder='전화번호'
          value={this.state.phone}
          onChange={this.handleChange}
          name='phone'
        />
        <button type='submit'>등록</button>
      </form>
    );
  }
}

export default PhoneForm;
