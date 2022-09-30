import { useContext } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/card-context';
import classes from './HeaderCartButton.module.css'

export default function HeaderCartButton({ onClick }) {
	
	const cartCtx = useContext(CartContext);

	const numberofCartItems = cartCtx.items.reduce((curNumber, item) => {
		return curNumber + item.amount;
	}, 0)

	return (
		<button className={classes.button} onClick={onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberofCartItems}</span>
		</button>
	);
};
