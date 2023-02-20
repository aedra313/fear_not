import React from 'react';
import s from './label.module.css';

// eslint-disable-next-line react/prop-types
const Label = ({color, text}) => {
  let fill;
  if (color === 'military') {
    fill = '#00BFFF';
  } else if (color === 'civil') {
    fill = '#FFFF00';
  } else {
    fill = '#912958';
  }

  return (
    <div className={s.label}>
      <svg width="45" height="110" viewBox="0 0 45 110" fill="none" xmlns="http://www.w3.org/2000/svg">

        <path d="M0.00012207 25.8824L22.5001 0L45.0001 25.8824V110H0.00012207V25.8824Z" fill={fill}/>

      </svg>
      <p className={s.description}> {text}</p>
    </div>
  );
};

export default Label;
