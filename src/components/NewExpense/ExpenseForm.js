import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {	
    
    const expenseSubmitHandler = () => {
		console.log("submit");
	};

	return (
		<form onSubmit={expenseSubmitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
                    <label className="label">Title</label>
					<input className="input" type='text' />
				</div>

				<div className='new-expense__control'>
					<label className="label">Amount</label>
					<input claseName="input" type='number' min='0.01' step='0.01' />
				</div>

				<div className='new-expense__control'>
					<label className="label">Date</label>
					<input className="input" type='date' min='2019-01-01' max='2023-12-31' />
				</div>

				<div className='new-expense__actions'>
					<button type='submit'>Add Expense</button>
				</div>
			</div>
		</form>
	);
};

export default ExpenseForm;
