import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createContact,
  deleteContact,
  getContacts,
} from 'redux/services/contactsApi';

export const getContactsThunk = createAsyncThunk('contacts/get', () =>
  getContacts()
);
export const createContactsThunk = createAsyncThunk('contacts/post', data =>
  createContact(data)
);
export const deleteContactsThunk = createAsyncThunk('contacts/delete', id =>
  deleteContact(id)
);
