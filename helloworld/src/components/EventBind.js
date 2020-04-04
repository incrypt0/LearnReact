import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super();
    this.state = {
      message: "hello",
    };
  }
  clickhandler() {
    this.setState({
      message: "Hai",
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.clickhandler}>Hello</button>
      </div>
    );
  }
}

export default EventBind;
