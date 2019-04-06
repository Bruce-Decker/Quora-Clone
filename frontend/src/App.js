import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store'
import Login from './components/Login/Login'

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <BrowserRouter>
            <div className="App">
                <Route exact path="/" component={Login} />
            </div>

            </BrowserRouter>
         </Provider>
    );
  }
}

export default App;
