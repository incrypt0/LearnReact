import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  incrementCount() {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }
  incrementFive() {
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
  }
  decrementCount() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <button onClick={() => this.decrementCount()}>-</button>
        {this.state.count}
        <button onClick={() => this.incrementFive()}>+</button>
      </div>
    );
  }
}

export default Counter;
