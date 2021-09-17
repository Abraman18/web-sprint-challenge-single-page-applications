import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import PizzaForm from "./PizzaForm";

const Nav = () => {

	return (
		<div>
			<Router>
      			<nav className="navbar">	
       			 <li>	
          			<Link to="/" id="home">Home</Link>
       			 </li>
       			 <li>
          			<Link to="/pizza" id="order-pizza">Order Pizza</Link>
        		</li>
     		 	</nav>
      			<div className="App">
       		 	<Switch>
          			<Route exact path="/" component={Home} />
         			 <Route path="/pizza" component={PizzaForm} />
       		 	</Switch>
     			</div>
    		</Router>
		</div>
	)
}

export default Nav;