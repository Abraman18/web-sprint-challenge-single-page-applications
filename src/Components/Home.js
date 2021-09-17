import React from "react";
import { Link } from 'react-router-dom';


const Home = () => {

	return (
		<>
			<img src='Assets/Pizza.jpg' alt='pizza' />
			
			<Link to='/pizza' >
				<button id="order-pizza">
					 Order Now
				</button>
				</Link>
		</>
	)
}

export default Home