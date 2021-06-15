import React from 'react'
import ExpenseDate from './ExpenseDate/ExpenseDate'
import styles from './ExpenseItem.module.css'
import Card from '../../Card/Card'

const ExpenseItem = (props) => {


	return (
		<li>
			<Card className={styles.ExpenseItem}>
				<ExpenseDate date={props.date} />
				<div className={styles.ExpenseItem__description}>
					<h2>{props.title}</h2>
					<div className={styles.ExpenseItem__price}>${props.amount}</div>
				</div>
			</Card>
		</li>
	)
}

export default ExpenseItem
