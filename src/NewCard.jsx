import React, { useState } from "react";
import { useContext } from "react";
import DataContext from "./context/DataContext";
import axios from "axios";
import { CARD_INFO_URL } from "./constants/api";
import { useNavigate } from "react-router";

function NewCard() {
	const { data, setData } = useContext(DataContext);
	const [author, setAuthor] = useState("");
    const navigate = useNavigate();
    
    const fetchNextCard = async (id) => {
        const response = await axios.get(`${CARD_INFO_URL}/${id}/info`);
        const result = response.data;
        result.author = author;
        setData([...data, result]);
        navigate("/");
    };

	const handleSubmit = async (e) => {
        e.preventDefault();
        if(author){
            fetchNextCard(data.length);
            setAuthor('');
        }
    };

	return (
		<div className="NewCard">
			<h1>Add New Card</h1>
			<form className="newCardForm" onSubmit={handleSubmit}>
				<label htmlFor="author">Author</label>
				<input
					type="text"
					id="author"
					required
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				/>
				<button type="submit" className="NewCardButton">Submit</button>
			</form>
		</div>
	);
}

export default NewCard;
