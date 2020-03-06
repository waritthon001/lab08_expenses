import React, { Component } from 'react';
import {v4} from 'uuid';

import Header from './components/Header';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionTable from './components/TransactionTable';

import './App.css';

export default class App extends Component {
  state = {
    // sample transactions
    transactions: [ 
      {
        id: v4(),
        name: 'Dinner with family',
        amount: -1250,
        date: new Date(2020,1,28)
      },
      {
        id: v4(),
        name: 'Movie',
        amount: -200,
        date: new Date(2020,1,29)
      },
      {
        id: v4(),
        name: 'Lottery',
        amount: 1500,
        date: new Date(2020,2,2)
      },
      {
        id: v4(),
        name: 'Salary',
        amount: 6500,
        date: new Date(2020,1,25)
      }
    ]
  }

  addTransaction = (name,amount) => {
    console.log('add new transaction')

    const newTransaction = {
      id: v4(),
      name,
      amount: +amount,
      date: new Date()
    }

    this.state.transactions.unshift(newTransaction);
    this.setState( { transactions: this.state.transactions } );
  }

  clearTransactions = () => {
    this.setState( { transactions: [] } );
  }

  render() {
    return (
      <div className="container mt-4 mb-5">
        <Header />
        <AddTransaction 
            addTransaction={this.addTransaction} />
        <Balance transactions={this.state.transactions}/>
        <IncomeExpense transactions={this.state.transactions}/>
        <TransactionTable 
            transactions={this.state.transactions} 
            clearTransactions={this.clearTransactions} />
      </div>
    )
  }
}
