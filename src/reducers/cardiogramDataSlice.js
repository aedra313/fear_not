import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import Label from '../components/misc/cardiogramMisc/label';
import React from 'react';

export const fetchData = () => async (dispatch) => {
  dispatch(fetchDataStart());
  try {
    const response = await axios.get('http://localhost:3000/api/cardiogram');
    dispatch(fetchDataSuccess(response.data));
    dispatch(calculateDataLabelsArray(response.data));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};

const dataValidator = (element, type) => {
  const dayLabels = [];
  if (Array.isArray(element)) {
    dayLabels.push(<Label color={type} text={element[0]}/>);
    dayLabels.push(<Label color={type} text={element[1]}/>);
  } else if (element) {
    dayLabels.push( <Label color={type} text={element}/>);
  }
  return dayLabels;
};

export const cardiogramDataSlice = createSlice({
  name: 'CardiogramData',
  initialState: {
    isLoading: false,
    data: [],
    error: null,
    dataLabelsArray: [],
  },
  reducers: {
    fetchDataStart: (state) => {
      state.isLoading = true;
    },
    fetchDataSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = [];
    },
    fetchDataFailure: (state, action) => {
      state.isLoading = false;
      state.data = [];
      state.error = action.payload;
    },
    calculateDataLabelsArray: (state, action) => {
      const DATA = action.payload;
      let dayHolder=[];
      for (let i = 0; i < DATA.length; i++) {
        if (i % 2 !== 1) {
          dayHolder.push(...dataValidator(DATA[i].civil, 'civil'));
          dayHolder.push(...dataValidator(DATA[i].military, 'military'));
          dayHolder.push(...dataValidator(DATA[i].russian, 'russian'));
        } else if (i % 2 === 1) {
          dayHolder.push(...dataValidator(DATA[i].military, 'military'));
          dayHolder.push(...dataValidator(DATA[i].civil, 'civil'));
          dayHolder.push(...dataValidator(DATA[i].russian, 'russian'));
        }
        state.dataLabelsArray.push(dayHolder);
        dayHolder = [];
      }
    },
  },
});

export const selectData = (state) => state.cardiogramData.data;
export const selectLoading = (state) => state.cardiogramData.isLoading;

export const selectDataLabelsArray = (state) => state.cardiogramData.dataLabelsArray;

export const {fetchDataStart, fetchDataSuccess, fetchDataFailure, calculateDataLabelsArray} = cardiogramDataSlice.actions;

export default cardiogramDataSlice.reducer;
