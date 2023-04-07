import React from 'react';
import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import Modal from './components/cardiogram/modal/modal';
import {useSelector} from 'react-redux';
import {selectOpen} from './components/cardiogram/modal/modalSlice';

function App() {
  const opened = useSelector(selectOpen);
  return (
    <div className='app'>
      <Header />
      <Home />
      <Footer />
      {opened === true && <Modal />}
    </div>
  );
}

export default App;
