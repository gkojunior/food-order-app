import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImages from '../../assets/ghanaMeals.jpeg';
import classes from './Header.module.css';

export default function Header({ onShowCart }) {
	return (
		<Fragment>
			<header className={classes.header}>
				
				<h1>Ghanian Meals</h1>
				<div className={classes.cartButton}><HeaderCartButton onClick={onShowCart} /></div>
				
			</header>
			<div className={classes['main-image']}>
				<img src={mealsImages} alt='Table full of food' />
			</div>
		</Fragment>
	);
}
