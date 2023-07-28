import React, { useContext } from "react";
import styles from "./MealItem.module.css";
import MealItmeForm from "./MealItmeForm";
import CartContext from "../../../store/cart-contex"; // Make sure to import the correct CartContext from the appropriate file.

const MealItem = (props) => {
  const formattedPrice = `$${props.price.toFixed(2)}`;

  const cartContext = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItmeForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
