import {configureStore} from '@reduxjs/toolkit';
import modalReducer from '../reducers/modalSlice';
import cardiogramDataReducer from '../reducers/cardiogramDataSlice';
import modalDataReducer from '../reducers/ModalDataSlice';


export default configureStore({
  reducer: {
    modal: modalReducer,
    cardiogramData: cardiogramDataReducer,
    modalData: modalDataReducer,
  },
});
