import React from "react";
import style from "./Card.module.scss";
import { useState } from "react";
import PopOutCard from "../PopOutCard/PopOutCard";

function Card({ imageLinks, authors, title, description, setActiveBook }) {
  return (
    <div>
      <div
        className={style.card}
        onClick={() => {
          setActiveBook({ imageLinks, authors, title, description });
        }}>
        <img className={style.card__img} src={imageLinks} />
        <h5>Author: {authors}</h5>
        <h4>Title: {title}</h4>
        <p>Description: {description}</p>
      </div>
    </div>
  );
}

export default Card;
