import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Cards from "./components/pages/cards";
import Navbar from "./components/Navbars/NavBar";
import { Routes, Route } from "react-router-dom";
import Orders from "./components/pages/orders";
import OrderForm from "./components/pages/orderForm";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			{/*{<Cards />}  */}
			{/* */}
			<Navbar />
			<Routes>
				<Route path='/' element={<Orders />} />
				<Route path='/cards' element={<Cards />} />
				<Route path='/orderForm' element={<OrderForm />} />
			</Routes>
		</>
	);
}

export default App;
