import React from 'react';
import s from './modal.module.css';
import DateSwitcher from './dateSwitcher';

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
        <DateSwitcher day={modalState} setDay={setModalState} />

        <div className={s.video}>
          <iframe src="https://drive.google.com/file/d/1m5oSUeffdVyTRWUnOUL2X9I9KsF2ogx-/preview" width="213" height="300" allow="autoplay"></iframe>
        </div>
        <p>Накопичення втоми і применшення страждань цивільними. Накопичення втоми і применшення страждань цивільними.</p>
        <div className={s.condition}>
          <p className={s.conditionLabel}>Загальний стан</p>
          <p className={s.conditionValue}>6 <span> / 7</span></p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
