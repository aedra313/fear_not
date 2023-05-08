import React from 'react';
import s from './modal.module.css';
import DateSwitcher from './dateSwitcher';
import {useDispatch} from 'react-redux';
import {manageOpen} from '../../../reducers/modalSlice';
import Conditions from './conditions';
import VideoCard from './videoCard';

// eslint-disable-next-line react/prop-types
const Modal = () => {
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(manageOpen(false));
  };

  const buttonClicked = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={s.wrap} onClick={closeHandler}>
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
    </div>
  );
};

export default Modal;
