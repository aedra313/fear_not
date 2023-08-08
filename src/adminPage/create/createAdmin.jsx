import React from 'react';
import CardiogramAdmin from './cardiogramAdmin';
import ModalAdmin from './modalAdmin';
import QuizAdmin from './quizAdmin';

// eslint-disable-next-line react/prop-types
const CreateAdmin = ({isLoading, cardiogramLastDay, modalLastDay}) => {
  return (
    <>
      {!isLoading && <div>
        <CardiogramAdmin lastDay={cardiogramLastDay}/>
        <ModalAdmin lastDay={modalLastDay} />
        <QuizAdmin />
      </div>}
    </>
  );
};

export default CreateAdmin;
