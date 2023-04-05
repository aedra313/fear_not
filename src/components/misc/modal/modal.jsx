import React from 'react';
import s from './modal.module.css';

// eslint-disable-next-line react/prop-types
const Modal = ({modalState, setModalState}) => {
  const closeHandler = () => {
    setModalState(false);
  };

  const buttonClicked = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={s.wrap} onClick={closeHandler}>
      <div className={s.container} onClick={ (e) => buttonClicked(e) }>
        <div className={s.close} onClick={closeHandler} />
        <p> day {modalState}</p>
      </div>
    </div>
  );
};

export default Modal;
