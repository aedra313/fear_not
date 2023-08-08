import React from 'react';
import CardiogramAdminUpdate from './cardiogramAdminUpdate';
import ModalAdmin from '../create/modalAdmin';

// eslint-disable-next-line react/prop-types
const UpdateAdmin = ({isLoading, cardiogramLastDay, modalLastDay}) => {
  return (
    <>
      {!isLoading && <div>
        <CardiogramAdminUpdate lastDay={cardiogramLastDay}/>
        <ModalAdmin lastDay={modalLastDay} />
      </div>}
    </>
  );
};

export default UpdateAdmin;
