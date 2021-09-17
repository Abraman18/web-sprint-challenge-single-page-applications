import React from "react";
// import * as Yup from "yup";


// const formSchema = Yup.object().shape({
// 	name: Yup
// 		.string()
// 		.required()
// 	.min(6,"name must be at least 2 characters")
// })

// const initalFormState = {
// 	name: "",
// 	Toppings:""
// }
// const [formState, setFormState] = useState(initalFormState);

// const logEvent = event => {
// 	setFormState({...formState, name:event.target.value})
// 	// setFormState([event.target]: event.target.value);
// }

const formSubmit = e => {
	e.preventDefault();
}


const PizzaForm = () => {

	

	return (
		<div>
			<h1>Order Your Pizza Here</h1>
			<form id='pizza-form'>
				<input type="text" name="name" placeholder="Enter your name" id="name-input" />
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
				<label>
					Special Instructions
					<input type="text" id="special-text"/>
				</label>
				<button onSubmit={formSubmit} id="order-button">Add To Order</button>
			</form>
		</div>
	)
}

export default PizzaForm