import React, { useState } from "react";
// import * as Yup from "yup";

const logEvent = event => {
	console.log(event.target.value)
	// setFormState([event.target]: event.target.value);
}
const formSubmit = e => {
	e.preventDefault();
}

// const [formState, setFormState] = useState({
// 	name: "",
// 	Toppings:""
// });
const PizzaForm = () => {

	

	return (
		<div>
			<h1>Order Your Pizza Here</h1>
			<form id='pizza-form'>
				<input type="text" value="name" placeholder="Enter your name" id="name-input" onChange={logEvent} />
				<label>
					Pick a size:
					<select id="size-dropdown">
						<option>Medium</option>
						<option>Large</option>
					</select>
				</label>
				<h3>Choose Your Toppings</h3>
				<label>
					<input type="checkbox" />
					Pineapple
				</label>
				<label>
					<input type="checkbox" />
					Chicken
				</label>
				<label>
					<input type="checkbox" />
					Onions
				</label>
				<label>
					<input type="checkbox" />
					Olives
				</label>
				<button onSubmit={formSubmit} id="order-button">Add To Order</button>
			</form>
		</div>
	)
}

export default PizzaForm