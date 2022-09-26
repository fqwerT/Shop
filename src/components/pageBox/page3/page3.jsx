import React from "react";
import style from './page3.module.scss'
import img from './IMAGE.png'

export const Page3 = () => {
  return (
  <div className={style.page3}>
    <div className={style.page3__container}>
        <div className={style.page3__info}>
          <div className={style.page3__infoText}>
            <h1 className={style.page3__heading}>About me</h1>
            <h1 className={style.page3__text}>I'm a trendy</h1>
            <h1 className={style.page3__text}>Cushion Designer</h1>
            <h1 className={style.page3__heading2}>learn more</h1>
          </div>
        </div>
        <div className={style.page3__illustration}>
            <img src={img} alt='img' className={style.page3__img}/>
        </div>
    </div>
  </div>
  );
};
