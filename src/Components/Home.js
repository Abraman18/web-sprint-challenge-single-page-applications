import React from "react";
import { Link } from 'react-router-dom';


const Home = () => {

	return (
		<div>
			<img src='Assets/Pizza.jpg' alt='pizza' />
			<Link to='/pizza' id="order-pizza">Order Now</Link>
		</div>
	)
}

export default Home