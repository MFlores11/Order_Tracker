import { React, useState } from "react";
import CardInfo from "../data/CardInfo";
import orderInfo from "../data/orderInfo";
import ShoppingCart from "../icons/ShoppingCart";
import "../styles/card.css";
import useItemStore from "./useStore";

const Cards = () => {
	const addItem = useItemStore((state) => state.addItem);
	const addTotal = useItemStore((state) => state.addTotal);

	const [itemName, updOrder] = useState([]);

	let amount = 1;
	const order = useItemStore.getState().items;

	const onChange = (e) => {
		amount = ParsInt(e.target.value, 10);
	};

	const handleClick = (item) => {
		// const index = order.findIndex((order) => order.name === item.title);
		updOrder([...itemName, item]);
		if (order.some((order) => order.name === item.title)) {
			addTotal(item.title);
			return;
		}

		addItem({
			id: Math.ceil(Math.random() * 100000),
			total: amount,
			name: item.title,
		});

		// console.log(item.title);
	};
	console.log("re-rendering");

	return (
		<>
			<div className='card-conatiner'>
				<div className='card-grid'>
					{CardInfo.map((items, index) => {
						return (
							<div key={index}>
								<div className='card'>
									<div className='card-img'></div>
									<div className='card-info'>
										<p className='text-title'>{items.title}</p>
										<p className='text-body'>{items.info}</p>
									</div>
									<div className='card-footer'>
										<span className='text-title'>{items.price}</span>
										<input
											type='number'
											name='amount'
											min='0'
											placeholder='0'
											onChange={onChange}
										/>
										<button
											className='card-button'
											onClick={() => {
												handleClick(items);
											}}
										>
											<ShoppingCart />
										</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className='itemsContainer' style={{ display: order.length === 0 ? "flex" : "none" }}>
				<div className='items'>
					{order.map((items, index) => {
						return (
							<div key={index}>
								{items.total} X {items.name}
							</div>
						);
					})}
					<button>Complete Order</button>
				</div>
			</div>
		</>
	);
};

export default Cards;
