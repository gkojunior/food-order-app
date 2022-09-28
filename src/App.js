import { Fragment } from 'react';

import Header from './Compnonets/Layout/Header';
import Meals from './Compnonets/Meals/Meals';
import Cart from './Compnonets/Cart/Cart';

function App() {
	return (
    <Fragment>
      <Cart />
			<Header />
			<main>
				<Meals />
			</main>
		</Fragment>
	);
}

export default App;
