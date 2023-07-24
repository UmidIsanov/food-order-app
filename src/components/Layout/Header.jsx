import React from "react";
import sushiImage from "../../assets/sushi.jpg";
import styles from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";
const Header = () => {
  return (
    <React.Fragment>
      
      <header className={styles.header}>
        <h1>Японя Кухня</h1>
        <HeaderCartButton/>
      </header>
      <div className={styles['main-image']}>
        <img src={sushiImage} alt="фото суши" />
      </div>
    </React.Fragment>
  );
};

export default Header;
