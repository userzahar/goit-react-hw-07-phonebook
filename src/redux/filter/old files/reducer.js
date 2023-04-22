// import { initialState } from 'redux/initialState';
// import { createReducer } from '@reduxjs/toolkit';
// import { filterContacts } from './actions';

// const filterReducer = createReducer(initialState, {
//   [filterContacts]: (state, action) => {
//     return { ...state, filter: action.payload };
//   },
// });

// export function filterReducer(state = initialState, action) {
//   console.log('🚀 ~ action:', action);

//   switch (action.type) {
//     case CONTACTS_FILTER:
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     default:
//       return state;
//   }
// }
