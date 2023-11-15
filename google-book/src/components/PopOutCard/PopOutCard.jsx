import React from "react";
import style from "./PopOutCard.module.scss";
import { useState, useEffect } from "react";

function PopOutCard({ activeBook, setIsActive }) {
	console.log(activeBook);
	const { volumeInfo } = activeBook;
	console.log(volumeInfo);
	return (
		<div className={style.card}>
			<img
				className={style.card_img}
				src={
					volumeInfo.imageLinks?.thumbnail ??
					"./src/assets/image-unavailable.png"
				}
			/>
			<div>
				<h2>Title: {volumeInfo.title}</h2>
				<h4>Authors: {volumeInfo.authors?.join(", ") ?? "-"} </h4>
				<p>Publisher: {volumeInfo.publisher ?? "-"} </p>
				<p>Published: {volumeInfo.publishedDate ?? "-"}</p>
				<p>Average Rate: {volumeInfo.averageRating ?? "-"}/5</p>
				<p>Number of ratings: {volumeInfo.ratingsCount ?? "-"}</p>
				<p>Description: {volumeInfo.description ?? "-"}</p>
				<button onClick={() => setIsActive(false)}>Close</button>
			</div>
		</div>
	);
}

export default PopOutCard;
