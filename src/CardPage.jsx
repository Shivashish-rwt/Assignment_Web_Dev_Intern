import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { useContext } from "react";
import DataContext from "./context/DataContext";
import Card from "./Card";

function CardPage() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { data, setData } = useContext(DataContext);
	const card = data.find((card) => card.id === id);
	const [author, setAuthor] = useState("");

	const handleUpdate = (e) => {
		e.preventDefault();
		card.author = author;
		let updatedData = data.filter((data) => data !== card);
		setData([card, ...updatedData]);
		navigate("/");
	};

	const handleDelete = (e) => {
		e.preventDefault();
		let updatedData = data.filter((data) => data !== card);
		setData(updatedData);
		navigate("/");
	};

	useEffect(() => {
		if (card) {
			setAuthor(card.author);
		}
	}, [card, setAuthor]);

	return (
		<div className="CardPage">
			<h1>Card Details</h1>
			<Card
				key={card.id}
				image={card.download_url}
				id={card.id}
				author={card.author}
                className="CardPage-Card"
			/>
			<form className="newCardForm">
				<label htmlFor="author">Author</label>
				<input
					type="text"
					id="author"
					required
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				/>
				<button type="submit" onClick={handleUpdate} className="UpdateButton">
					Update
				</button>
				<button type="submit" onClick={handleDelete} className="DeleteButton">
					Delete
				</button>
			</form>
		</div>
	);
}

export default CardPage;
