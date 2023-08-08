import React, {useEffect, useState} from 'react';
import s from './adminPage.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {selectLoading} from '../reducers/cardiogramDataSlice';
import {selectData} from '../reducers/cardiogramDataSlice';
import {fetchModalData, selectModalData} from '../reducers/ModalDataSlice';
import CreateAdmin from './create/createAdmin';
import UpdateAdmin from './update/updateAdmin';


const AdminPage = () => {
  const isLoading = useSelector(selectLoading);
  const DBData = useSelector(selectData);
  const dispatch = useDispatch();
  const modalData = useSelector(selectModalData);

  const [activeForm, setActiveForm] = useState('create');

  const handleCreateClick = () => {
    setActiveForm('create');
  };

  const handleUpdateClick = () => {
    setActiveForm('update');
  };

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
    <div className={s.layout}>
      <div className={s.tabContainer}>
        <button className={`${s.createTab} ${activeForm === 'create' ? s.activeTab : ''}`}
          onClick={handleCreateClick}>Новий День</button>
        <button className={`${s.updateTab} ${activeForm === 'update' ? s.activeTab : ''}`}
          onClick={handleUpdateClick}>Редагування</button>
      </div>

      {activeForm === 'create' && <CreateAdmin isLoading={isLoading} modalLastDay={modalLastDay} cardiogramLastDay={cardiogramLastDay}/>}
      {activeForm === 'update' &&<UpdateAdmin isLoading={isLoading} modalLastDay={modalLastDay} cardiogramLastDay={cardiogramLastDay}/>}
    </div>
  );
};

export default AdminPage;
