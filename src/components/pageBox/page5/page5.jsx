import React from "react";
import style from './page5.module.scss'
import img from './img/IMAGE.png'

export const Page5 = () => {
  return (
    <div className={style.page5}>
      <div className={style.page5__container}>
        <div className={style.page5__textBox}>
            <div className={style.page5__Box} >
                <h1 className={style.page5__heading}>
                New
                </h1>
                    
                <p className={style.page5__text1}>
                Spring Cushion
                </p>

                <p className={style.page5__text2}>
                Collection 2019
                </p>

                <h1 className={style.page5__heading}>
                buy now
                </h1>
            </div>
        </div>
        <div className={style.page5__img}><img className={style.page5__illustration} alt='img' src={img}/></div>
      </div>
    </div>
  );
};
