import React from 'react';
import s from './label.module.css';

// eslint-disable-next-line react/prop-types
const Label = ({color, text}) => {
  let fill;
  let stroke;
  if (color === 'military') {
    fill = '#00BFFF';
    stroke='#071422';
  } else if (color === 'civil') {
    fill = '#FFFF00';
    stroke='#eaab09';
  } else {
    fill = '#912958';
    stroke='';
  }

  return (
    <div className={s.label}>
      <svg width="40" height="110" viewBox="0 0 45 110" fill="none" xmlns="http://www.w3.org/2000/svg">

        <path d="M59.5001 33.1025V136C59.5001 137.381 58.3808 138.5 57.0001 138.5H3.00012C1.61941 138.5 0.500122 137.381 0.500122 136V33.1025C0.500122 32.4799 0.732497 31.8796 1.15177 31.4192L28.1518 1.77215C29.1434 0.683245 30.8568 0.683245 31.8485 1.77215L58.8485 31.4192C59.2677 31.8796 59.5001 32.4798 59.5001 33.1025Z" fill={fill} stroke={stroke}/>

      </svg>
      <p className={s.description}> {text}</p>
    </div>
  );
};

export default Label;
