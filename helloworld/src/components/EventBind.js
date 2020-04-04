import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super();
    this.state = {
      message: "hello",
    };
    this.constructerClickHandler=this.constructerClickHandler.bind(this)
  }
  clickhandler() {
    this.setState({
      message: "Hai",
    });
  }
  constructerClickHandler(){
    this.setState({
        message: "Hai",
      });
  }
  arrowFunctionClickHandler= () => {
      this.setState({
        message: "Hai",
      })
  }
  render() {
    return (
      <div>
        {/* binding approach */}
        <button onClick={this.clickhandler.bind(this)}>
          {this.state.message}
        </button>
        {/* Arrow function approach */}
        <button onClick={() => this.clickhandler()}>
          {this.state.message}
        </button>
        {/* Binding event handler within class */}
        <button onClick={this.constructerClickHandler}>
          {this.state.message}
        </button>
        {/* Arrow function click handler */}
        <button onClick={this.arrowFunctionClickHandler}>
          {this.state.message}
        </button>
        </div>
    );
  }
}

export default EventBind;
