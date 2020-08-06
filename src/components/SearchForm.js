import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = ({ setInput }) => {
	const [ searchInput, setSearchInput ] = useState(); //used so that we can use props callback in onButtonclicked

	//registers every keystroke
	const onInputChange = (event) => {
		const input = event.target.value;
		setSearchInput(input);
		if (event.key === 'Enter') {
			setInput(searchInput); //when the user presses enter, this sets searchInput
		}
	};

	//when user submits the form
	const onSubmitPressed = (event) => {
		event.preventDefault(); //prevents page from reloading
	};

	const onButtonClicked = (event) => {
		setInput(searchInput); //when the user presses enter, this sets searchInput
	};

	return (
		<div className="form">
			<form className="search-form" onSubmit={onSubmitPressed}>
				<div className="ui action input" style={{ width: '43rem ', margin: '2rem' }}>
					<input
						onKeyDown={onInputChange}
						className="search-bar"
						style={{ width: '99%' }}
						type="text"
						placeholder="Enter the recipe name here..."
					/>
					<button className="ui orange icon button" onClick={onButtonClicked}>
						<i className="ui white search icon" onClick={onButtonClicked} />
					</button>
				</div>
			</form>
		</div>
	);
};

export default SearchForm;
