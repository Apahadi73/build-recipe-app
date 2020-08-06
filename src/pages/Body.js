import React from 'react';
import Recipe from '../components/Recipe';

import './Body.css';

const Body = ({ recipeList }) => {
	const onRenderList = (recipeList) => {
		if (recipeList != null && recipeList.length != null) {
			var recipeArray = Object.values(recipeList);
			//maps element of recipe array to Recipe components
			return recipeArray.map((recipe) => (
				<Recipe
					key={recipe.recipe.uri}
					title={recipe.recipe.label}
					calories={recipe.recipe.calories}
					image={recipe.recipe.image}
					ingredients={recipe.recipe.ingredients}
				/>
			));
		}
		return <div>Enter the recipe to start with...</div>;
	};

	return <div className="recipe-container">{onRenderList(recipeList)}</div>;
};

export default Body;
