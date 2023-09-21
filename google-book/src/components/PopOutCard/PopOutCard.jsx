import React from "react";
import style from "./PopOutCard.module.scss";
import { useState, useEffect } from "react";

function PopOutCard({ activeBook }) {
  console.log(activeBook);
  return (
    <div className={style.card}>
      <p>Title: {activeBook?.title}</p>
    </div>
  );
}

export default PopOutCard;
