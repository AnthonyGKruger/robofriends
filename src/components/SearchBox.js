import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
	return (
		<div>
			<input 
                style={{height: '3em', borderRadius:'15px'}}
				type="search"
				placeholder="Search Robots"
				onChange={searchChange}
			/>
		</div>
	);
};

export default SearchBox;
