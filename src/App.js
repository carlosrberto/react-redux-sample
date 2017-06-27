import React, { Component } from 'react';
import { createStore } from 'redux';
import counter from './reducers/counter';
import Counter from './components/Counter';
import logo from './logo.svg';
import './App.css';

const store = createStore(counter);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Redux</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <p>The counter</p>
        <Counter value={store.getState()} increment={() => store.dispatch({type: 'INCREMENT'})} decrement={() => store.dispatch({type: 'DECREMENT'})} />
      </div>
    );
  }
}

export default App;
