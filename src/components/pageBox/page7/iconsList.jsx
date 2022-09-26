import React from "react";
import style from "./iconsList.module.scss";
import icon1 from "./img/Vector.svg";
import icon2 from "./img/Vector2.svg";
import icon3 from "./img/Vector3.svg";

export const IconList = () => {
  const icons = [
    { src: icon1, tittle: "Safe shopping", tittle2: "Buy with confidence" },
    { src: icon2, tittle: "Fast shipping", tittle2: "Get your product fast" },
    {
      src: icon3,
      tittle: "Satisfaction guarantee",
      tittle2: "Or get your money back",
    },
  ];

  return (
    <div className={style.iconPage}>
      {icons.map((item) => (
        <div className={style.iconPage__box}>
          <div className={style.iconPage__imgBox}>
            <img src={item.src} alt="img" className={style.iconPage__img} />
          </div>
          <div>
            <h1 className={style.iconPage__tittle}>{item.tittle}</h1>
            <h1 className={style.iconPage__tittle}>{item.tittle2}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};
