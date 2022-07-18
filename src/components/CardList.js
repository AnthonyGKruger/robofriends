import React from "react";
import Card from "./Card";

const CardList = (props) => {
	return (
		<React.Fragment>
			{props.robots.map((robot) => (
				<Card
					id={robot.id}
					name={robot.name}
					email={robot.email}
					key={robot.id}
				/>
			))}
		</React.Fragment>
	);
};

export default CardList;
