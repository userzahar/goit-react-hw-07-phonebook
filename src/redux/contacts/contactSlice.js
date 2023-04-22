import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Volodymyr Zelenskyi', number: '+380-459-12-5678' },
      { id: 'id-2', name: 'Petro Poroshenko', number: '+380-443-89-1256' },
      { id: 'id-3', name: 'Viktor Yushchenko', number: '+380-645-17-7943' },
    ],
  },
  reducers: {
    addContact: (state, action) => {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    },
    deleteContact: (state, action) => ({
      ...state,
      contacts: [
        ...state.contacts.filter(contact => contact.id !== action.payload),
      ],
    }),
  },
});

export const contactReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;
