import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  let [flag,setflag]=useState(false)

  function handleclick(){
    setflag(true)
  }
  return (
    
    <div id="main">
          <button id="click" onClick={handleclick}> click</button>
          {flag && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
    </div>
  );
}


export default App;
