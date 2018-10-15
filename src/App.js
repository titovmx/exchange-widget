import React, { Component } from 'react';

import Header from './common/Header';
import ExchangeWidget from './exchange/ExchangeWidget';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header title="Exchange" />
        <ExchangeWidget />
      </div>
    );
  }
}

export default App;
