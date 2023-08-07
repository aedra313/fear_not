import React, {useEffect, useState} from 'react';
import s from './quiz.module.css';
import anketa from './anketa.svg';
import arrow from './quiz-arrow.svg';
import axios from 'axios';

const Quiz = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://fear-not-backend.onrender.com/api/quiz');
      setData(response.data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const validDayArray = data.slice(-1);
  const validDayObj=validDayArray[0];
  const link = validDayObj.quizURL;
  console.log(link);

  return (
    <div className={s.wrap}>
      <a href={link} className={s.btn}><div><p>Опитування</p></div></a>
      <img src={arrow} className={s.arrow} alt=""/>
      <img src={anketa} className={s.sticker} alt=""/>

    </div>
  );
};

export default Quiz;
