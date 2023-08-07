import React, {useEffect} from 'react';
import Quiz from './quiz/quiz';
import About from './about/about';
import Cardiogram from './cardiogram/cardiogram';
import {fetchData, selectLoading} from '../../reducers/cardiogramDataSlice';
import {useDispatch, useSelector} from 'react-redux';

// eslint-disable-next-line react/prop-types
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const isLoading = useSelector(selectLoading);

  if (isLoading) {
    return console.log('loading');
  }

  return (
    <div>
      {!isLoading && <Cardiogram />}
      <Quiz />
      <About />
    </div>
  );
};

export default Home;
