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
			  <div className="row row-cols-auto d-flex justify-content-center">
			  <div className="col-10 col-sm-10 col-md-10 col-lg-3 col-xl-3 col-xxl-3"><Card /></div>
			  <div className="col-10 col-sm-10 col-md-10 col-lg-3 col-xl-3 col-xxl-3"><Card /></div>
			  <div className="col-10 col-sm-10 col-md-10 col-lg-3 col-xl-3 col-xxl-3"><Card /></div>
			  <div className="col-10 col-sm-10 col-md-10 col-lg-3 col-xl-3 col-xxl-3"><Card /></div>
			  </div>
			</div>
		</div>
	);
};

export default Home;

