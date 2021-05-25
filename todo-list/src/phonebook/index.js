import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm.jsx';
import PhoneInfoList from './components/PhoneInfoList';

class Phonebook extends Component {
  id = 2;
  state = {
    information: [
      {
        id: 0,
        name: '김민준',
        phone: '010-0000-0000',
      },
      {
        id: 1,
        name: '홍길동',
        phone: '010-0000-0001',
      },
    ],
    keyword: '',
  };

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };

  handleCreate = (data) => {
    console.info('data', data);
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data }),
    });
  };

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter((info) => info.id !== id),
    });
  };

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        (elem) =>
          id === elem.id
            ? { ...elem, ...data } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
            : elem // 기존의 값을 그대로 렌더링
      ),
    });
  };

  render() {
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      (info) => info.name.indexOf(keyword) !== -1
    );
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <p>
          <input
            placeholder='검색할 이름을 입력하세요..'
            onChange={this.handleChange}
            // value={keyword}
          />
        </p>
        <PhoneInfoList
          data={filteredList}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default Phonebook;
