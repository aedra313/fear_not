import React, {useEffect} from 'react';
import CardiogramAdmin from './cardiogramAdmin';
import ModalAdmin from './modalAdmin';
import QuizAdmin from './quizAdmin';
import {useDispatch, useSelector} from 'react-redux';
import {selectLoading} from '../reducers/cardiogramDataSlice';
import {selectData} from '../reducers/cardiogramDataSlice';
import {fetchModalData, selectModalData} from '../reducers/ModalDataSlice';


const AdminPage = () => {
  const isLoading = useSelector(selectLoading);
  const DBData = useSelector(selectData);
  const dispatch = useDispatch();
  const modalData = useSelector(selectModalData);
  /*
  dispatch(fetchModalData());
*/
  let modalLastDay;
  useEffect(()=>{
    if (!modalData) {
      dispatch(fetchModalData());
    } else {
      modalLastDay = modalData.length;
    }


    /* if (modalData.length > 2) {
      modalLastDay = modalData.length;
    } else {
      modalLastDay = 1;
    }*/
  } );
  console.log(modalLastDay+666);
  let cardiogramLastDay;
  if (DBData.length > 2) {
    cardiogramLastDay = DBData[DBData.length - 1].day;
  } else {
    cardiogramLastDay = 1;
  }

  console.log(modalData);


  console.log(isLoading);
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

export default AdminPage;
