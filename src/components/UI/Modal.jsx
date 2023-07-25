import React from 'react';
import styles from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onCloseCard} ></div>;
};

const ModalWindow = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const portalElement = document.getElementById('overlays'); 
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onCloseCard = {props.onClick} />, portalElement) }
      {ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>, portalElement)}
    </React.Fragment>
  );
};

export default Modal;
