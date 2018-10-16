import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Header from './common/Header';
import ExchangeWidget from './exchange/ExchangeWidget';
import { store } from './store/configureStore';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header title="Exchange" />
        <Provider store={store}>
          <ExchangeWidget />
        </Provider>
      </div>
    );
  }
}

export default App;
