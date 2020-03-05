import React, { Component } from 'react'

export default class AddTransaction extends Component {
  render() {
    return (
      <div>
        <form id="add-transaction_form">
          <div className="form-group">
            <label htmlFor="name">Transaction Name:</label>
            <input type="text" id="name" className="form-control" placeholder="Expense detail ..."/>
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount (+:income / -:expense)</label>
            <input type="number" id="amount" className="form-control" placeholder="0.00"/>
          </div>

          <input type="submit" value="Add Transaction" className="btn btn-primary btn-block"/>
        </form>
      </div>
    )
  }
}
