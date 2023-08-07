import React from 'react';
import s from './switch.module.css';

const Switch = () => {
  return (
    <div className={s.container}>
      <label className={s.switch} htmlFor="checkbox">
        <input type="checkbox" id="checkbox"/>
        <div className={`${s.slider} ${s.round}`}></div>
      </label>
    </div>
  );
};

export default Switch;
