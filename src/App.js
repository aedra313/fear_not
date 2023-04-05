import React, {useState} from 'react';
import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import Modal from './components/misc/modal/modal';

function App() {
  const [modal, setModal] = useState(true);
  return (
    <div className='app'>
      <Header />
      <Home setModalState={setModal}/>
      <Footer />
      {modal !== false && <Modal modalState={modal} setModalState={setModal}/>}
    </div>
  );
}

export default App;
