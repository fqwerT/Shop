import React from "react";
import style from "./page2.module.scss";
import { Cards } from "./cards/cards";

export const Page2 = () => {
  return (
    <div className={style.page2}>
      <div className={style.page2__textBox}>
        <div className={style.page2__textContainer}>
          <div className={style.page2__h1}>
            <h1>I'm a cushion designer</h1>
          </div>
          <div className={style.page2__text}>
            <p className={style.page2__p}>
              Based in San Francisco, California I design trendy and fashion
              Cushions, since I have memory I always had a tendency to design
              and illustration.
            </p>
          </div>
        </div>
      </div>
      <div className={style.page2__cardBox}>
        <Cards />
      </div>
    </div>
  );
};
