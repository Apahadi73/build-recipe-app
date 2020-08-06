import React, { useState, useEffect } from 'react';
import { apikeys, appId } from './apiKeys';

import SearchForm from './components/SearchForm';
import Body from './pages/Body';
import './App.css';

const App = (_) => {
	const [ searchInput, setSearchInput ] = useState('Salad');
	const [ recipesList, setRecipiesList ] = useState([]);

	const recipeUrl = `https://api.edamam.com/search?q=${searchInput}&app_id=${appId}&app_key=${apikeys}`;

	//runs every time searchInput state changes
	useEffect(
		() => {
			fetchRecipies();
		},
		[ searchInput ]
	);

	//fetches recipies from the api and stores it in the recipes list
	const fetchRecipies = async () => {
		const response = await fetch(recipeUrl);
		const data = await response.json();
		setRecipiesList(data.hits);
	};

	return (
		<div className=" App">
			<div className="Container">
				<SearchForm setInput={setSearchInput} />
				<Body recipeList={recipesList} />
			</div>
		</div>
	);
};

export default App;
