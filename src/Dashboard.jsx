import React from "react";
import Card from "./Card";
import { useContext } from "react";
import DataContext from "./context/DataContext";
import defaultImage from "./assets/create-new-card-logo.png";
import { Link } from "react-router-dom";

function Dashboard() {
	const { data } = useContext(DataContext);

	return (
		<div className="dashboard">
			<h1 className="heading">My Projects</h1>
			<div className="card-list">
				<Link to={"/card"}>
					<div className="card">
						<div className="image">
							<img
								src={defaultImage}
								alt="card-image"
								className="default-image"
							/>
						</div>
						<p>Create a new project</p>
						<span>or try a sample project</span>
					</div>
				</Link>
				{data.map((card) => {
					return (
						<Link to={`/card/${card.id}`}>
							<Card
								key={card.id}
								image={card.download_url}
								id={card.id}
								author={card.author}
							/>
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default Dashboard;
