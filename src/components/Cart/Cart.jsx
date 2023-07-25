import Modal from '../UI/Modal'; // Make sure the correct file path is used
import styles from './Cart.module.css';

const Cart = (props) => {
  
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[{id: 'm1', name: 'sushi', amount: 2, price: 10.99}].map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Итого</span>
        <span>49.99</span>
      </div>
      <div className={styles.actions}> 
        <button className={styles['button--alt']}>Закрыть</button>
        <button className={styles['button--button']}>Заказать</button>
      </div>
    </Modal>
  );
}

export default Cart;
