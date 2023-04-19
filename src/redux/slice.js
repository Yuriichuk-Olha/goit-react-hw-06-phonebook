import { createSlice, nanoid } from "@reduxjs/toolkit";
// import { initialStateContacts, initialStateFilter } from "./reducer";

export const initialStateContacts = {
    contacts: [
      { "id": "id-1", "name": "Rosie Simpson", "number": "459-12-56" },
      { "id": "id-2", "name": "Hermione Kline", "number": "443-89-12" },
      { "id": "id-3", "name": "Eden Clements", "number": "645-17-79" },
      { "id": "id-4", "name": "Annie Copeland", "number": "227-91-26" }
    ],
    };
  
  
    export const initialStateFilter={
      filter: "",
    }

export const contactSlice = createSlice({
    name: 'value',
    initialState:initialStateContacts,
    reducers: {
        addContact(state, action){
            state.contacts.push({
                id: nanoid(),
                name:action.payload.name,
                number:action.payload.number,
            })
        },
        deletContact:(state, action)=>{
            state.contacts = state.contacts.filter(contact=>contact.id !== action.payload.id)
        },
       
    }
})

export const { addContact, deletContact} = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;

export const filterSlice = createSlice({
    name: 'filters',
    initialState: initialStateFilter,
    reduсers: {
         filterContact:(state, action)=>{
            state.name = action.payload.name
        }
    }
})

export const { filterContact } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;