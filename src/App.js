import { Fragment, useState } from 'react';

import Header from './Compnonets/Layout/Header';
import Meals from './Compnonets/Meals/Meals';
import Cart from './Compnonets/Cart/Cart';

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);

	const showCartHandler = () => {
		setCartIsShown(true);
	};

	const hideCartHandler = () => {
		setCartIsShown(false);
	};

	return (
		<Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
			<main>
				<Meals />
			</main>
		</Fragment>
	);
}

export default App;
