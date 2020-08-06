import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Recipe.css';

const Recipe = ({ title, calories, image, ingredients }) => {
	const onRenderIngredientList = () => {
		// var ingredientArray = Object.values(ingredients);
		if (ingredients !== undefined) {
			return ingredients.map((ingredient) => <li key={uuidv4()}>{ingredient.text}</li>);
		}
	};
	return (
		<div className="recipe">
			<h3>{title}</h3>
			<img className="picture" src={image} alt={title} />
			<p>Total Calories: {Math.round(calories)}</p>
			{onRenderIngredientList()}
		</div>
	);
};

export default Recipe;
