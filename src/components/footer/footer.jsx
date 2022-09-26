import React from "react";
import Logo from "./img/IMAGE.png";
import style from "./footer.module.scss";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer__container}>
        <img src={Logo} alt="img" />
        <div className={style.footer__itemsBox}>
          <Link to="/Home" className={style.footer__menuItem}>
            Home
          </Link>
          <Link to="/About me" className={style.footer__menuItem}>
            About me
          </Link>
          <Link to="/Products" className={style.footer__menuItem}>
            Products
          </Link>
          <Link to="/Contact me" className={style.footer__menuItem}>
            Contact me
          </Link>
        </div>
      </div>
    </div>
  );
};
