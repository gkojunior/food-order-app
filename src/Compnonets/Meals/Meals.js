import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

import {Fragment} from 'react'

export default function Meals() {
  return (
    <Fragment>
          <MealsSummary />
          <AvailableMeals />
    </Fragment>
  )
}
