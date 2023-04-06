import React from 'react';
import s from './modal.module.css';

// eslint-disable-next-line react/prop-types
const Modal = ({active, setActive}) => {
  console.log(active);
  return (
    <div onClick={()=>setActive(false)} className={active ? `${s.wrap} ${s.active}` : s.wrap} >
      <div className={s.content} onClick={(e) => e.stopPropagation()} ></div>

    </div>
  );
};

export default Modal;
