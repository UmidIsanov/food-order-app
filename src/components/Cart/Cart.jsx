import React from "react"; // Don't forget to import React if it's not already imported
import Modal from "../UI/Modal"; // Make sure the correct file path is used
import styles from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-contex";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;

  const hasItems = cartContext.items.length > 0;

  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id);
  };
  const addCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price} // Corrected the typo from "proce" to "price"
          onAdd={addCartItemHandler.bind(null, item)}
          onRemove={() => removeCartItemHandler(item.id)} // Fixed the "id" parameter for onRemove
        />
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onCloseCard}>
      {cartItems}
      <div className={styles.total}>
        <span>Итого</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onCloseCard}>
          Закрыть
        </button>
        {hasItems && (
          <button className={styles["button--button"]}>Заказать</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
