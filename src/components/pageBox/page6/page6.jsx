import React from "react";
import style from "./page6.module.scss";
import img1 from "./img/IMAGE.png";
import img2 from "./img/IMAGE2.png";
import img3 from "./img/IMAGE3.png";
import img4 from "./img/IMAGE4.png";
import img5 from "./img/IMAGE5.png";
import img6 from "./img/IMAGE6.png";

export const Page6 = () => {
  const products = [
    {
      Src: img1,
      Name: "Plated Cushion",
      price: "$ 19.99 USD",
      id: 1,
    },
    {
      Src: img2,
      Name: "Silver Cushion",
      price: "$ 19.99 USD",
      id: 2,
    },
    {
      Src: img3,
      Name: "Deep Blue Cushion",
      price: "$ 19.99 USD",
      id: 3,
    },
    {
      Src: img4,
      Name: "Pink Cushion",
      price: "$ 19.99 USD",
      id: 4,
    },
    {
      Src: img5,
      Name: "Black Cushion",
      price: "$ 19.99 USD",
      id: 5,
    },
    {
      Src: img6,
      Name: "Green Cushion",
      price: "$ 19.99 USD",
      id: 6,
    },
  ];

  return (
    <div className={style.page6}>
    <div className={style.page6__container}>
      {products.map((item) => (
        
        <div key={item.id} className={style.page6__item}>
          <div>
            <img src={item.Src} alt="item" />
          </div>
          <div>
            <h1 className={style.page6__name}>{item.Name}</h1>
         
            <h1 className={style.page6__price}>{item.price}</h1>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};
