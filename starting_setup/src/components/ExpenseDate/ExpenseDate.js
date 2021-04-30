import React from 'react'
import styles from './ExpenseDate.module.css'

const ExpenseDate = (props) => {

  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className={styles.ExpenseDate}>
      <div className={styles.ExpenseDate__month}>{month}</div>
      <div className={styles.ExpenseDate__year}>{year}</div>
      <div className={styles.ExpenseDate__day}>{day}</div>
    </div>
  )
}

export default ExpenseDate
