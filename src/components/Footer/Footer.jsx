import React from "react";
import style from "./footer.module.css";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer_left}>
        <h1>Эрбол</h1>
        <h1>Бекжан</h1>
        <h1>Альбина</h1>
      </div>
      <div className={style.footer_rigth}>
        <h1>
          Eсли не нашли подходяший продукт? Свяжитесь с нашим консультантом
        </h1>
        <button>Связатся с консультантом</button>
      </div>
    </div>
  );
};

export default Footer;
