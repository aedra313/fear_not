import React from 'react';
import s from './quiz.module.css';
import anketa from './anketa.svg';
import arrow from './quiz-arrow.svg';

const Quiz = () => {
  return (
    <div className={s.wrap}>
      <a href="google.com" className={s.btn}><div><p>Опитування</p></div></a>
      <img src={arrow} className={s.arrow} alt=""/>
      <img src={anketa} className={s.sticker} alt=""/>

    </div>
  );
};

export default Quiz;
