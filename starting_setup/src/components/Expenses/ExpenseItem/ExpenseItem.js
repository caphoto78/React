import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate/ExpenseDate'
import styles from './ExpenseItem.module.css'
import Card from '../../Card/Card'

const ExpenseItem = (props) => {

	const [title, setTitle] = useState(props.title)

	const clickHandler = () => {
		setTitle('Updated!')
		console.log(title)
	}

	return (
		<Card className={styles.ExpenseItem}>
			<ExpenseDate date={props.date} />
			<div className={styles.ExpenseItem__description}>
				<h2>{title}</h2>
				<div className={styles.ExpenseItem__price}>{props.amount}</div>
				<button onClick={clickHandler}>Change Title</button>
			</div>
		</Card>
	)
}

export default ExpenseItem
