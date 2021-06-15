import React, { useState } from 'react'
import styles from './Expenses.module.css'
import Card from '../../components/Card/Card'
import ExpensesFilter from './ExpenseFilter/ExpenseFilter'
import ExpensesList from './ExpensesList/ExpensesList'

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })


  return (
    <div>
      <Card className={styles.Expenses}>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses
