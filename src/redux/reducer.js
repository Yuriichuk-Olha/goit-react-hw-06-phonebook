import {combineReducers} from '@reduxjs/toolkit';
import { contactsReducer } from './slice';



export const reducer = combineReducers({
  contacts: contactsReducer,
})

