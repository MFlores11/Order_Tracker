import React from "react";
import "../styles/orders.css";
import orderInfo from "../data/orderInfo";

const orders = () => {
	return (
		<>
			{orderInfo.map((info, index) => {
				return (
					<div key={index}>
						<div className='order-container'>
							<div className='info-grid'>
								<div className='costumer_name'>
									<h2>{info.name}</h2>
								</div>
								<div className=' payment_status'>
									<p>Payment status:</p>
									<p> {info.paid}</p>
								</div>

								<div className='order'>
									<h3>Order</h3>
									{info.order_items.map((item, i) => {
										return (
											<div key={i}>
												<p onClick={console.log(item)}>{item}</p>
											</div>
										);
									})}
								</div>
								<div className='dateTime'>
									<p> Delivery method: </p>
									<p>{info.delivery_option}</p>
									<p className='dateInfo'>
										{info.date}, {info.time}
									</p>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default orders;
