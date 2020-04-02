import React from "react";

// function Greeter() {
//     return <h1>Hi incrypt0</h1>
// }
const Greeter = props => {
  console.log(props);
  return (
    <div>
      <h1>Hello {props.name}</h1>
      {props.children}
    </div>
  );
};
export default Greeter;
