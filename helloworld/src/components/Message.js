import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }
changeMessage = () => {
  this.setState({
    message:'You are now a member'  //setstate is used to change the state of a component
  })
  
}
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subcribed</button>
      </div>
    );
  }
}

export default Message;
