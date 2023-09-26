import React from "react";
import style from "./Card.module.scss";
import { useState } from "react";
import PopOutCard from "../PopOutCard/PopOutCard";

function Card({
	bookData,
	imageLinks,
	authors,
	title,
	setActiveBook,
	isActive,
	setIsActive,
}) {
	return (
		<div>
			<div
				className={style.card}
				onClick={() => {
					if (!isActive) {
						setActiveBook(bookData);
						setIsActive(true);
					}
				}}>
				<img className={style.card__img} src={imageLinks} />
				<h4 className={style.card__title}>Title: {title}</h4>
				<h5 className={style.card__author}>Author: {authors}</h5>
				<p className={style.card__clickme}>Click for description</p>
			</div>
		</div>
	);
}

export default Card;
