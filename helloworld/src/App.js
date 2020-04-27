import React from "react";
import "./App.css";

import NameList from "./components/NameList";
import Stylesheets from "./components/Stylesheets";
import Inline from "./components/InlineCss";
import "./stylesheets/regularStyleSheet.css"
import styles from "./stylesheets/moduleStyleSheet.module.css"

function App() {
  return (
    <div className="App">
    <Stylesheets primary={true}/>
    <Inline></Inline>
    <h1 className='error'>Error</h1>
    <h1 className={styles.success}>Success</h1>
    </div>
  );
}

export default App;
