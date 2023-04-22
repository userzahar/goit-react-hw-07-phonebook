import { createAction } from '@reduxjs/toolkit';

export const deleteContact = createAction('CONTACTS_REMOVE');
export const addContact = createAction('CONTACTS_ADD');

// export const addContact = data => ({
//   type: CONTACTS_ADD,
//   payload: {
//     id: data.id,
//     name: data.name,
//     number: data.number,
//   },
// });

// export const deleteContact = id => ({
//   type: CONTACTS_REMOVE,
//   payload: {
//     id,
//   },
// });
