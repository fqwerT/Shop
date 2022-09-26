import React from "react";
import { ReactComponent as Logo } from "./IMAGE.svg";
import { Link } from "react-router-dom";

import style from "./header.module.scss";

export const Header = () => {
  return (
    <div className={style.main}>
      <div className={style.main__container}>
        <div className={style.main__wrapper}>
        <div className={style.main__logo}>
          <Logo></Logo>
        </div>
        <div className={style.main__menuContainer}>
          <div className={style.main__menuItems}>
            <Link to="/Home" className={style.main__menuItem}>
              Home
            </Link>
            <Link to="/About me" className={style.main__menuItem}>
              About me
            </Link>
            <Link to="/Products" className={style.main__menuItem}>
              Products
            </Link>
            <Link to="/Contact me" className={style.main__menuItem}>
              Contact me
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
