import React from 'react'

import ExpenseItem from '../ExpenseItem/ExpenseItem'
import './ExpensesList.css'

const ExpensesList = props => {

  if (props.expenses.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
  }

  return <ul className="expenses-list">
    {props.expenses.map((expenseItem) => {
      return <ExpenseItem
        key={expenseItem.id}
        title={expenseItem.title}
        amount={expenseItem.amount}
        date={expenseItem.date}
      ></ExpenseItem>
    })}
  </ul>
}

export default ExpensesList