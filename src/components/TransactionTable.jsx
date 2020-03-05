import React from 'react'

export default function TransactionTable() {
  return (
    <div>
      <div><h3>Transaction History</h3></div>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody id="transaction-list"></tbody>
      </table>
      <button id="clear-history" className="btn btn-danger btn-block">Clear History</button>
    </div>
  )
}
