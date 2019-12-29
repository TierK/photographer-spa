import React from 'react';
import './App.css';
import Favicon from 'react-favicon';


function App() {
  return (
    <div className="App">
      <Favicon url="/public/ico.png" />
      <div className="todo-cover">
        <img src="https://www.clipartmax.com/png/full/275-2750617_work-in-progress-icons-work-in-progress-icon-transparent.png" alt="Working on it"/>
      </div>
    </div>
  );
}

export default App;
