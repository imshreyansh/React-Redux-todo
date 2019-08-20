import React, { Component } from 'react';
import './App.css';
import Todo from './Todo'
import { BrowserRouter as Router, Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path='/' exact component={Todo} />
        </Router>
      </div>
    )
  }
}

export default App;
