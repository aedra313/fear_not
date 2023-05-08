import {createSlice} from '@reduxjs/toolkit';


export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    day: 1,
  },
  reducers: {
    manageOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    manageDay: (state, action) => {
      state.day = action.payload;
    },
    incrementDay: (state) => {
      state.day += 1;
    },
    decrementDay: (state) => {
      state.day -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {manageOpen, manageDay, incrementDay, decrementDay} = modalSlice.actions;

export const selectOpen = (state) => state.modal.isOpen;
export const selectDay = (state) => state.modal.day;

export default modalSlice.reducer;
