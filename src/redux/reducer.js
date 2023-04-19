import {combineReducers} from '@reduxjs/toolkit';
import { contactsReducer, filtersReducer } from "./slice";


export const reducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
})

