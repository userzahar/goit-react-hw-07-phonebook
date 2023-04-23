import { combineReducers } from 'redux';
// import { contactReducer } from './contacts/contactSlice';
import { filterReducer } from './filter/filterSlice';
import { contactsReducer } from './contacts/slice';

export const reducer = combineReducers({
  filter: filterReducer,
  contacts: contactsReducer,
});
