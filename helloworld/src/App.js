import React from "react";
import "./App.css";

import ParentComponent from "./components/ParentComponent";

function App() {
  return (
    <div className="App">
      {/* <EventBind></EventBind>
    <Counter></Counter> */}
      <ParentComponent />
    </div>
  );
}

export default App;
