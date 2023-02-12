import React from 'react';
import Quiz from './quiz/quiz';
import About from './about/about';
import Cardiogram from '../cardiogram/cardiogram';

const Home = () => {
  return (
    <div>
      <Cardiogram />
      <Quiz />
      <About />
    </div>
  );
};

export default Home;
