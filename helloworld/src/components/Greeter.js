import React from "react";

// function Greeter() {
//     return <h1>Hi incrypt0</h1>
// }
const Greeter = (name, heroName) => {
  console.log(name, heroName);
  return (
    <div>
      <h1> Hello {name} </h1>
      {heroName}
    </div>
  );
};
export default Greeter;
