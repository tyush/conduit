import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import React from 'react';
import * as Chakra from 'chakra-ui'
const { ipcRenderer, remote } = require('electron');

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { time: "--:--:--" }
  }

  componentDidMount() {
    let setState = this.setState.bind(this)
    this.interval = setInterval(() => ipcRenderer.invoke("whatIsTime").then((t) => {setState({ time: t })}), 500)
  }

  render() {
    return (
      <span>
        Chrono Time: { this.state.time }
      </span>
    )
  }
}



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React<p>
            <Timer />
            </p>
          </a>
        </header>
      </div>
    )
  }
}

export default App;
