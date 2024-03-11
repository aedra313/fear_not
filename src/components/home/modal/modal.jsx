import React, {useEffect} from 'react';
import {Modal} from 'antd';
import s from './modal.module.css';
import DateSwitcher from './dateSwitcher';
import {useDispatch, useSelector} from 'react-redux';
import {manageOpen} from '../../../reducers/modalSlice';
import VideoCard from './videoCard';
import {useState} from 'react';
import GeneralCondition from './generalCondition';
import CloseButton from './closeButton';
import useWidth from '../../../hooks/useWidth';
import Conditions from './conditions';

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

  const WIDTH = useWidth();
  let modalWidth;
  WIDTH >= 1440 ? modalWidth=1264 : WIDTH >= 743 ? modalWidth=671 : modalWidth=324;
  console.log('хуй '+ modalWidth);

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
      width = {modalWidth}
      className={s.modalWrap}
      keyboard={true}
      mask={true}
      closeIcon={<CloseButton />}
      maskClosable={true}
      maskStyle={{'background': 'rgba(51, 51, 51, 0.78)'}}
      onCancel={handleCancel}
      footer={null}
    >
      <DateSwitcher />

      <VideoCard />

      <Conditions isModal={true} />

      <GeneralCondition />
    </Modal>);
};

export default ModalDay;
