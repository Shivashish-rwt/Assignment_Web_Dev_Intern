import React from "react";

function Card({ image, id, author }) {
	return (
		<div className="card">
			<div className="image">
				<img src={image} alt="card-image" />
			</div>
			<p>#{id}</p>
			<span>{author}</span>
		</div>
	);
}

export default Card;
