import React from 'react';
import s from './labels.module.css';
import DATA from './../data';
import mixer from './mixer';
import DayElement from '../dayElements/dayElement';

// eslint-disable-next-line react/prop-types
const Labels = () => {
  const days =[];
  let day =[];
  // eslint-disable-next-line guard-for-in
  for (const item in DATA.items) {
    days.push(<div>{day}</div>);
    console.log(day);

    mixer(day, item);
    day = [];
  }


  const dayButtons = days.map((day, index) => <DayElement key={`day ${day}`} labels={day} dayNumber={index+1} />);


  return (
    <div className={s.container}>
      {dayButtons}
    </div>
  );
};

export default Labels;
