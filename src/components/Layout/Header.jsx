import React from "react";
import sushiImage from "../../assets/sushi.jpg";
const Header = () => {
  return (
    <div>
      <header>
        <h1>Японя Кухня</h1>
        <button>Корзина</button>
      </header>
      <div>
        <img src={sushiImage} alt="фото суши" />
      </div>
    </div>
  );
};

export default Header;
