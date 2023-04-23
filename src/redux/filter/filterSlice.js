import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    filterContacts: (state, action) => {
      return { filter: action.payload };
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { filterContacts } = filterSlice.actions;
