import React, { Component } from 'react';
// import logo from './logo.svg';
import Welcome from './components/welcome/welcome.js';
import Logout from './components/logout/logout.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Welcome/>
      <Logout/>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button>
            Learn React
          </button>
        </header> */}
      </div>
    );
  }
}

export default App;
