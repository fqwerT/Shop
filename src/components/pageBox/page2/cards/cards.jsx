import React from "react";
import img1 from "./img/IMAGE.png";
import img2 from "./img/IMAGE2.png";
import img3 from "./img/IMAGE3.png";
import style from './card.module.scss'

export const Cards = () => {
  const card = [
    { src: img1, heading: "About me" },
    { src: img2, heading: "My products" },
    { src: img3, heading: "Contact me" },
  ];

  return (
    <div className={style.card}>
      {card.map((item) => (
        <div className={style.card__box}>
          <img src={item.src} alt="img" />
          <div className={style.card__info}>
            <h1 className={style.card__heading}>{item.heading}</h1>
            <h1 className={style.card__heading2}>Learn more</h1>
          </div>
        </div>
      ))}
    </div>
  );
};
