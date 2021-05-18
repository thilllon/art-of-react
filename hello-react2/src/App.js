// import ScrollBox from "./ScrollBox";

// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "center"
// };

// const App = () => <ScrollBox />;

// render(<App />, document.getElementById("root"));

// file: src/App.js
import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";
import PhoneInfo from "./components/PhoneInfo";
import PhoneInfoList from "./components/PhoneInfoList";
import Counter from "./components/Counter";

class App extends Component {
  id = 2;
  state = {
    information: [
      {
        id: 0,
        name: "김민준",
        phone: "010-0000-0000",
      },
      {
        id: 1,
        name: "홍길동",
        phone: "010-0000-0001",
      },
    ],
  };
  handleRegister = (data) => {
    console.info("$$$$");
    console.info(this);
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

  render() {
    const { information } = this.state;
    return (
      <div>
        <Counter />
        <PhoneForm onRegister={this.handleRegister} />
        {/* {JSON.stringify(information)} */}
        <PhoneInfoList
          data={this.state.information}
          onRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default App;
