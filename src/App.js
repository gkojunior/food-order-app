import { Fragment } from 'react';

import Header from './Compnonets/Layout/Header'
import Meals from './Compnonets/Meals/Meals';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
