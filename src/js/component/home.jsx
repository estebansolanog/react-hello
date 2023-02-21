import React from "react";

//importamos otros componentes que nos interesen
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
			  <Jumbotron />
			  <div className="row d-flex justify-content-center">
			  <Card />
			  <Card />
			  <Card />
			  <Card />
			  </div>
			</div>
		</div>
	);
};

export default Home;

