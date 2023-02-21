import React from 'react';
import s from './labels.module.css';
import DATA from './../data';
import mixer from './mixer';

const Labels = () => {
  console.log(DATA.items);
  const days =[];
  let day =[];

  // eslint-disable-next-line guard-for-in
  for (const item in DATA.items) {
    days.push(<div>{day}</div>);
    day = [];
    mixer(day, item);
  }

  return (
    <div className={s.container}>
      {days}
    </div>
  );
};

export default Labels;
