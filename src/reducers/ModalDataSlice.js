import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchModalData = () => async (dispatch) => {
  dispatch(fetchModalDataStart());
  try {
    const response = await axios.get('https://fear-not-backend.onrender.com/api/modal');
    dispatch(fetchModalDataSuccess(response.data));
  } catch (error) {
    dispatch(fetchModalDataFailure(error.message));
  }
};


export const modalDataSlice = createSlice({
  name: 'ModalData',
  initialState: {
    isLoading: false,
    data: [],
    error: null,
  },
  reducers: {
    fetchModalDataStart: (state) => {
      state.isLoading = true;
    },
    fetchModalDataSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = [];
    },
    fetchModalDataFailure: (state, action) => {
      state.isLoading = false;
      state.data = [];
      state.error = action.payload;
    },
  },
});

export const selectModalData = (state) => state.modalData.data;
export const selectModalLoading = (state) => state.modalData.isLoading;


export const {fetchModalDataStart, fetchModalDataSuccess, fetchModalDataFailure} = modalDataSlice.actions;

export default modalDataSlice.reducer;
