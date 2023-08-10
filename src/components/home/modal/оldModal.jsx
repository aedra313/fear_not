/*
import React, {useEffect} from 'react';
import s from './modal.module.css';
import DateSwitcher from './dateSwitcher';
import {useDispatch, useSelector} from 'react-redux';
import {manageOpen} from '../../../reducers/modalSlice';
import Conditions from './conditions';
import VideoCard from './videoCard';
import ReactDOM from 'react-dom';

// eslint-disable-next-line react/prop-types
const Modal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);

  const closeHandler = () => {
    dispatch(manageOpen(false));
  };

  const buttonClicked = (e) => {
    e.stopPropagation();
  };

  const modalClicked = (e) => {
    if (e.target.classList.contains(s.wrap)) {
      closeHandler();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isOpen]);

  if (!isOpen) {
    return null; // Якщо isOpen === false, повернути null для закриття модального вікна
  }

  return ReactDOM.createPortal(
      <div className={s.wrap} onClick={modalClicked}>
        <div className={s.container} onClick={ (e) => buttonClicked(e) }>
          <div className={s.close} onClick={closeHandler} />
          <DateSwitcher />

          <VideoCard />
          <div className={s.condition}>
            <p className={s.conditionLabel}>Загальний стан</p>
            <p className={s.conditionValue}>6 <span> / 7</span></p>
          </div>
          <Conditions />
        </div>
      </div>, document.getElementById('modal-root'),
  );
};

export default Modal;
*/
