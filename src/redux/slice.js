import { createSlice, nanoid } from "@reduxjs/toolkit";
import { initialStateContacts } from "./initial";

export const contactSlice = createSlice({
    name: 'contacts',
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
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id)
        },

        setFilter:(state, action)=>{
            state.filter = action.payload
        }
    }
})

export const { addContact, deletContact, setFilter} = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
