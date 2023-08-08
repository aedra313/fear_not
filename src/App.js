import React from 'react';
import './App.css';
import Header from './components/header/header';

import Home from './components/home/home';

import Footer from './components/footer/footer';

import AdminPage from './adminPage/adminPage';
import Modal from './components/home/modal/modal';

function App() {
  return (
    <div className='app'>
      <Header />
      <Home />
      <div>
        <AdminPage />
      </div>
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
