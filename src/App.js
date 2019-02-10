import React, { Component } from 'react';
import Navbar from './navbar';
import Budget from './budget/Budget';
import { BudgetProvider } from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <BudgetProvider>
        <div className="App">
        <Navbar />
        <div className="container my-5">
            <Budget />
        </div>
        </div>
      </BudgetProvider>
    );
  }
}

export default App;

