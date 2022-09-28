import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImages from '../../assets/meals.jpeg';
import classes from './Header.module.css'

const Header = (props) => {
	return (
	<Fragment>
		<header className={classes.header}>
			<h1>Meals</h1>
            <HeaderCartButton />
            </header>
        <div className={classes['main-image']}>
            <img src={ mealsImages } alt='Table full of food'/>
		</div>
        </Fragment>
    );
};

export default Header;