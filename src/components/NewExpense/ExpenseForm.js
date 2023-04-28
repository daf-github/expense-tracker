import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
	console.log("this is the component render");

	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	};

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	};

	const expenseSubmitHandler = () => {
		console.log(enteredTitle, enteredAmount, enteredDate);
	};

	return (
		<form onSubmit={expenseSubmitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label className='label'>Title</label>
					<input className='input' type='text' onChange={titleChangeHandler} />
					<div>{enteredTitle}</div>
				</div>

				<div className='new-expense__control'>
					<label className='label'>Amount</label>
					<input
						className='input'
						type='number'
						min='0.01'
						step='0.01'
						onChange={amountChangeHandler}
					/>
					<div>{enteredAmount}</div>
				</div>

				<div className='new-expense__control'>
					<label className='label'>Date</label>
					<input
						className='input'
						type='date'
						min='2019-01-01'
						max='2023-12-31'
						onChange={dateChangeHandler}
					/>
					<div>{enteredDate}</div>
				</div>

				<div className='new-expense__actions'>
					<button type='submit'>Add Expense</button>
				</div>
			</div>
		</form>
	);
};

export default ExpenseForm;
