import React, { Component } from 'react';
import Header from './components/header.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBalance: "$"+100,
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <h3>Balance: {this.state.currentBalance}</h3>
        </div>
        <div className="newTransactions">
        <label>Transaction <input type="text"/></label>
        <br/>
        <button>Debit</button>
        <button>Deposit</button>
        </div>
      </div>
    );
  }
}

export default App;
