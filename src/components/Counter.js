import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleClickButton = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  handleClickButton2 = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <div>count: {this.state.count}</div>
        <button onClick={this.handleClickButton2}>Decrement</button>
        <button onClick={this.handleClickButton}>increment</button>
      </div>
    );
  }
}
