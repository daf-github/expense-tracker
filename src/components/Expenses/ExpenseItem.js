import React, { useState} from "react";  
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
	const [title, setTitle] = useState(props.title)

	const clickHandler = () => {
		// setTitle( title === "Clicked" ? props.title : "Clicked");
		setTitle("Updated!!!")
	}

	console.log("render")

	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className='expense-item__description'>
				<h2>{title}</h2>
				<div className='expense-item__price'>${props.amount}</div>
			</div>
			<button onClick={clickHandler}>Click</button>
		</Card>
	);
}

export default ExpenseItem;
