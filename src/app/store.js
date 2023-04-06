import {configureStore} from '@reduxjs/toolkit';
import modalReducer from '../components/cardiogram/modal/modalSlice';


export default configureStore({
  reducer: {
    modal: modalReducer(state.users, action),
  },
});
