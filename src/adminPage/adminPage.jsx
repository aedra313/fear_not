import React from 'react';
import CardiogramAdmin from './cardiogramAdmin';
import ModalAdmin from './modalAdmin';
import QuizAdmin from './quizAdmin';


const AdminPage = () => {
  return (
    <>
      <CardiogramAdmin />
      <ModalAdmin />
      <QuizAdmin />
    </>
  );
};

export default AdminPage;
