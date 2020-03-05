import React from 'react';
import Header from './components/Header';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';

import './App.css';

function App() {
  return (
    <div className="container mt-4">
      <Header />
      <AddTransaction />
      <Balance />
      <IncomeExpense />
    </div>
  );
}

export default App;
