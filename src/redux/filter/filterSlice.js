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
console.log('🚀 ~ filterReducer:', filterReducer);

export const { filterContacts } = filterSlice.actions;
