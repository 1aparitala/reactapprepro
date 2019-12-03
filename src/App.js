import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Testt from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
<Testt name="Ajay" age="26"></Testt>

<br></br>
        Ajay's First React App
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
