import React, {useEffect} from 'react';
import {Modal} from 'antd';
import s from './modal.module.css';
import DateSwitcher from './dateSwitcher';
import {useDispatch, useSelector} from 'react-redux';
import {manageOpen} from '../../../reducers/modalSlice';
import Conditions from './conditions';
import VideoCard from './videoCard';
import {useState} from 'react';

// eslint-disable-next-line react/prop-types
const ModalDay = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);
  const [open, setOpen] = useState(false);


  useEffect(() => {
    if (isOpen) {
      setOpen(true);
    }
  }, [isOpen]);


  if (!isOpen) {
    return null; // Якщо isOpen === false, повернути null для закриття модального вікна
  }

  const handleCancel = () => {
    setOpen(false);
    dispatch(manageOpen(false));
  };
  return (
    <Modal
      open={open}
      title={null}
      className={s.modalWrap}
      keyboard={true}
      mask={true}
      maskClosable={true}
      maskStyle={{'background': 'rgba(51, 51, 51, 0.78)'}}
      onCancel={handleCancel}
      footer={null}
    >
      <DateSwitcher />

      <VideoCard />
      <div className={s.condition}>
        <p className={s.conditionLabel}>Загальний стан</p>
        <p className={s.conditionValue}>6 <span> / 7</span></p>
      </div>
      <Conditions isModal={true} />
    </Modal>);
};

export default ModalDay;
