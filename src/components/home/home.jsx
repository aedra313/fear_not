import React from 'react';
import Quiz from './quiz/quiz';
import About from './about/about';
import Cardiogram from '../cardiogram/cardiogram';

// eslint-disable-next-line react/prop-types
const Home = ({setModalState}) => {
  return (
    <div>
      <Cardiogram setModalState={setModalState} />
      <Quiz />
      <About />
    </div>
  );
};

export default Home;
