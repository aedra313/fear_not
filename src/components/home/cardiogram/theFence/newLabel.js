import React from 'react';
import s from './label.module.css';

// eslint-disable-next-line react/prop-types
export const VerticalLabel = ({color, text}) => {
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
      <svg width="47" height="110" viewBox="0 0 60 138" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        <path d="M59.5001 33.1025V136C59.5001 137.381 58.3808 138.5 57.0001 138.5H3.00012C1.61941 138.5 0.500122 137.381 0.500122 136V33.1025C0.500122 32.4799 0.732497 31.8796 1.15177 31.4192L28.1518 1.77215C29.1434 0.683245 30.8568 0.683245 31.8485 1.77215L58.8485 31.4192C59.2677 31.8796 59.5001 32.4798 59.5001 33.1025Z" fill={fill} stroke={stroke}/>
      </svg>

      <p className={s.description}> {text}</p>
    </div>
  );
};

export default VerticalLabel;

// eslint-disable-next-line react/prop-types
export const HorizontalLabel = ({color, text}) => {
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
      <svg width="110" height="47" viewBox="0 0 138 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        <path d="M33.1025 0.500122H136C137.381 0.500122 138.5 1.61941 138.5 3.00012V57.0001C138.5 58.3808 137.381 59.5001 136 59.5001H33.1025C32.4799 59.5001 31.8796 59.2677 31.4192 58.8485L1.77215 31.8485C0.683245 30.8568 0.683245 29.1434 1.77215 28.1518L31.4192 1.15177C31.8796 0.732497 32.4798 0.500122 33.1025 0.500122Z" fill={fill} stroke={stroke}/>
      </svg>

      <p className={s.description}> {text}</p>
    </div>
  );
};

