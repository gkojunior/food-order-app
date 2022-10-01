import { useContext } from 'react';

import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/card-context';

export default function MealItem({ id, name, description, price }) {
	const cartCtx = useContext(CartContext);

	const prices = `$${price.toFixed(2)}`;

	const addToCartHandler = amount => { 
		cartCtx.addItem({
			id: id,
			name: name,
			amount: amount,
			price: prices
		})
	};

	return (
	<li className={classes.meal}>
		<div>
			<h3>{name}</h3>
			<div className={classes.description}>{description}</div>
			<div className={classes.price}>{prices}</div>
		</div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} />
        </div>
        </li>
    )    
}
