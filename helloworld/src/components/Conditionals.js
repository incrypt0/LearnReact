import React, { Component } from "react";

export class Conditionals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    //     if (this.state.isLoggedIn) {
    //       return <div>Welcome Krish</div>;
    //     }
    //     else {
    //         return <div>Welcome Guest</div>
    //     }
    var message = this.state.isLoggedIn ? "Welcome Krish" : "Welcome Guest";
    return <div>{message}
    <button onClick ></button>
    </div>;
  }
}

export default Conditionals;
