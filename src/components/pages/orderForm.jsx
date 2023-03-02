import React, { useState } from "react";
import "../styles/form.css";
import orderInfo from "../data/orderInfo";
import useItemStore from "./useStore";

// require("dotenv").config();
function OrderForm() {
	const order = useItemStore((state) => state.items);
	const addTotal = useItemStore((state) => state.addTotal);
	const subTotal = useItemStore((state) => state.subTotal);
	const removeItem = useItemStore((state) => state.removeItem);
	const [deliveryOpt, setOption] = useState("");

	const [values, setValues] = useState({
		name: "",
		time: "",
		date: "",
		delivery_option: "",
	});

	const inputs = [
		{ id: "1", name: "delivery_option", value: "Pick-up" },
		{ id: "2", name: "delivery_option", value: "Delivery" },
		{ id: "3", name: "delivery_option", value: "Drop-off Shela" },
	];

	const checked = (e) => {
		setOption(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const data = new FormData(e.target);

		orderInfo.push(Object.fromEntries(data.entries()));
	};

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};
	const counter = (item, type) => {
		const index = order.findIndex((order) => order.name === item.name);
		console.log(index);

		if (type === "add") {
			addTotal(item.name);
			return;
		}
		if (order[index].total === 1) {
			removeItem(item.name);
			return;
		}

		subTotal(item);
	};

	return (
		<>
			<div className='form-container' onChange={onChange}>
				<h1>Complete order</h1>
				<form onSubmit={handleSubmit} className='orderForm'>
					<div className='inputGroup'>
						<input name='name' type='text' />
						<label>Name</label>
					</div>
					<div className='inputGroup'>
						<input name='date' type='date' />
						<label>Date</label>
					</div>
					<div className='inputGroup'>
						<input name='time' type='time' />
						<label>Time</label>
					</div>

					<label>Delivery Options</label>
					{inputs.map((item, index) => {
						return (
							<div className='checkboxContainer' key={index}>
								<input
									type='checkbox'
									checked={deliveryOpt === item.value}
									name={item.name}
									value={item.value}
									onChange={checked}
									placeholder={item.value}
									// required={deliveryOpt === "" ? true : false}
								/>
								<span>{item.value}</span>
							</div>
						);
					})}
					<div className='order-container'>
						<label className='order-label'>Order</label>
						{order.map((items, index) => {
							return (
								<div key={items.id}>
									{items.name}
									<div className='counter'>
										<button
											className='counterBtn'
											onClick={() => counter(items, "sub")}
											value={items.total}
											name={items.name}
										>
											-
										</button>
										<span className='counterNum'>{items.total} </span>
										<button
											className='counterBtn'
											onClick={() => counter(items, "add")}
											value={items.total}
											name={items.name}
										>
											+
										</button>
									</div>
								</div>
							);
						})}
					</div>

					<button className='completeBtn'>
						<span>Place Order</span>
					</button>
				</form>
			</div>
		</>
	);
}

export default OrderForm;
// required={true}
// required={true}
// required={true}
