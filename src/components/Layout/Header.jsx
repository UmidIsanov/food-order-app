import React from "react";
import sushiImage from "../../assets/sushi.jpg";
import styles from "./Header.module.css"
const Header = () => {
  return (
    <React.Fragment>
      
      <header className={styles.header}>
        <h1>Японя Кухня</h1>
        <button>Корзина</button>
      </header>
      <div className={styles['main-image']}>
        <img src={sushiImage} alt="фото суши" />
      </div>
    </React.Fragment>
  );
};

export default Header;
