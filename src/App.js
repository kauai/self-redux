import React, { Component } from 'react';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import './App.css';
import Counter from './Counter'
import counterReducer from './reducer';

const store = createStore(
    counterReducer,
    applyMiddleware(logger)
  )


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
              <Counter/>
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
