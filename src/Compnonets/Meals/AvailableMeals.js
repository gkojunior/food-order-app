import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
	{
		id: 'm1',
		name: 'Banku',
		description: 'Banku is a combination of fermented corn dough with cassava dough which is mixed and stirred in hot water till it becomes solid.',
		price: 22.99,
	},
	{
		id: 'm2',
		name: 'Fufu',
		description: 'This is a popular dish across the country and its neighbors',
		price: 16.5,
	},
	{
		id: 'm3',
		name: 'Waakye',
		description: 'Rice, Beans, and meat with Millet Leaves',
		price: 12.99,
	},
	{
		id: 'm4',
		name: 'Omotuo',
		description: 'Rice Balls with Peanut-Butter Soup',
		price: 18.99,
	},
];

export default function AvailableMeals() {
	const mealsList = DUMMY_MEALS.map((meal) => (
		<MealItem
			id={meal.id}
			key={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		/>
	));

	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
}
