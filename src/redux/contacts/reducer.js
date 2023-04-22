import { initialState } from 'redux/initialState';
import { createReducer } from '@reduxjs/toolkit';
import { deleteContact, addContact } from './actions';

export const contactsReducer = createReducer(initialState, {
  [addContact]: (state, action) => ({
    ...state,
    contacts: [...state.contacts, action.payload],
  }),
  [deleteContact]: (state, action) => ({
    ...state,
    contacts: [
      ...state.contacts.filter(contact => contact.id !== action.payload),
    ],
  }),
});
// export function contactsReducer(state = initialState, action) {
//   switch (action.type) {
//     case CONTACTS_ADD:
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     case CONTACTS_REMOVE:
//       return {
//         ...state,
//         contacts: [
//           ...state.contacts.filter(contact => contact.id !== action.payload),
//         ],
//       };
//     default:
//       return state;
//   }
// }
