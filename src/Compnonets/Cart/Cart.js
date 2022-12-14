import Modal from '../UI/Modal';
import classes from './Cart.module.css';

export default function Cart({onClose}) {
	const cartitems = (
		<ul className={['cart-items']}>
			{[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
				<li>{item.name}</li>
			))}
		</ul>
	);

	return (
		<Modal onClose={onClose}>
			{cartitems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>35.99</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']} onClick={onClose}>Close</button>
				<button className={classes.button}>Order</button>
			</div>
		</Modal>
	);
}
