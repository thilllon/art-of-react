// src/components/PhoneInfoList.js
import React, { Component } from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
  static defaultProps = {
    data: [
      {
        id: 111,
        name: "1234",
        phone: "010-0000-0001",
      },
    ],
  };

  render() {
    const { data } = this.props;
    // const list = data.map(elem => <PhoneInfo key={elem.id *2} info={elem} />);
    const list = data.map((elem, idx) => (
      // <PhoneInfo key={idx * 2} info={elem} />
      <PhoneInfo
        key={Math.floor(Math.random() * 1000)}
        info={elem}
        onRemove={this.props.onRemove}
      />
    ));
    console.info(list);
    console.info("##");
    return <div>{list}</div>;
  }
}

export default PhoneInfoList;
