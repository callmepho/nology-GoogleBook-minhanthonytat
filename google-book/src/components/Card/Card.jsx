import React from "react";

function Card({ imageLinks = "nope", authors, title, description }) {
	return (
		<div>
			<img src={imageLinks} />
			<h5>Author: {authors}</h5>
			<h4>Title: {title}</h4>
			<p>Description: {description}</p>
		</div>
	);
}

export default Card;
