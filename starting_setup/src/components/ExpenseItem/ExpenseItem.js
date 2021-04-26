import React from 'react'
import styles from './ExpenseItem.module.css'

const ExpenseItem = (props) => {
  const expenseDate = new Date(2021, 2, 28)
  console.log(expenseDate)


  return (
    <div className={styles.ExpenseItem}>
      <div>{props.date.toISOString()}</div>
      <div className={styles.ExpenseItem__description}>
        <h2>{props.title}</h2>
        <div className={styles.ExpenseItem__price}>{props.amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
