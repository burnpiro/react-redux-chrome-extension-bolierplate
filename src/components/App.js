import React, { Component } from 'react'
import ExampleContainer from '../containers/ExampleContainer'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Create you own extension</h1>
        </header>
        <ExampleContainer />
      </div>
    )
  }
}

export default App
