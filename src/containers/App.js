import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";

const App = () => {
	const [filteredRobots, setFilteredRobots] = useState([]);
	const [hasLoaded, setHasLoaded] = useState(false);

	useEffect(() => {
		if (!hasLoaded) {
			fetchUsers();
		}
	});

	const fetchUsers = () => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				return response.json();
			})
			.then((users) => {
				setFilteredRobots(users);
				setHasLoaded(true);
			});
	};

	const onSearchChange = (event) => {
		event.target.value === ""
			? fetchUsers()
			: getFilteredRobots(event.target.value);
	};

	const getFilteredRobots = (searchField) => {
		setFilteredRobots(
			filteredRobots.filter((robot) => {
				return robot.name
					.toLowerCase()
					.includes(searchField.toLowerCase());
			})
		);
	};

	return (
		<div className="tc">
			<h1 className="f1">RoboFriends</h1>
			<SearchBox searchChange={onSearchChange} />
			<Scroll>
				{filteredRobots.length === 0 ? (
					<h1>Loading...</h1>
				) : (
					<CardList robots={filteredRobots} />
				)}
			</Scroll>
		</div>
	);
};

export default App;
