import { combineReducers } from 'redux';
import { contactReducer } from './contacts/contactSlice';
import { filterReducer } from './filter/filterSlice';

export const reducer = combineReducers({
  filter: filterReducer,
  contacts: contactReducer,
});
