import React from "react";
import style from "./page.module.scss";
import Img from "./illustration.png";

export const Page1 = () => {
  return (
    <div className={style.page}>
      <div className={style.page__Part1}>    
        <div className={style.page__Img}>
          <img
            alt="illustration"
            src={Img}
            className={style.page__illustration}
          />
          </div>
            <div className={style.page__textContent}>
              <div className={style.page__text}>
                <h1 className={style.page__new}>new</h1>
                <div className={style.page__article}>
                  <div className={style.page__articelItemBox}>
                    <p className={style.page__articleItem}>Spring Cushion</p>
                  </div>
                  <div className={style.page__articelItemBox}>
                    {" "}
                    <p className={style.page__articleItem}>Collection 2019</p>
                  </div>
                </div>
                <h1 className={style.page__buy}>buy now</h1>
              </div>
            </div>        
            
      </div>
      <div className={style.page__Part2}>

        <div className={style.page__containerBox}>
            <div className={style.page__Box1}>
            </div>
            <div className={style.page__Box2}>

            </div>
        </div>
      </div>
    </div>
  );
};
