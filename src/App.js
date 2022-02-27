import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import ShowTime from './ShowTime';

function App() {

const imgClick = () => {
  setTime(getTime());
 console.log(currentTime);
  }
  const getTime = () =>{
    var d = new Date(); return d.toLocaleString();  
  }
  const [currentTime, setTime] = useState(getTime())
  return (
    <div className="App">
      <header className="App-header">

        <a id="clickToshowTime" onClick={imgClick} href="#">
        <img src={logo} 
         className="App-logo" alt="logo" />
        </a>
        <ShowTime
        getTime={getTime}
        />
      </header>
    </div>
  );
}

export default App;
