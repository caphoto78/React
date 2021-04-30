import React from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import styles from './Expenses.module.css'
import Card from '../Card/Card'

const Expenses = (props) => {
  const expenseItems = props.expenses.map((expenseItem, index) => {
    return <ExpenseItem
      key={index}
      title={expenseItem.title}
      amount={expenseItem.amount}
      date={expenseItem.date}
    ></ExpenseItem>
  })

  return (
    <Card className={styles.Expenses}>
      {expenseItems}
    </Card>
  )
}

export default Expenses
