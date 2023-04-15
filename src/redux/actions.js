import { nanoid } from "@reduxjs/toolkit"

export const addContact = text =>{
    return {
        type: "contacts/addContact",
        payload: {
            id: nanoid(),
            name: '',
            number: '',
        }
    }
}

export const deleteContact = contactId => {
    return {
        type:"contacts/deleteContact",
        payload: contactId,
    }
}

export const filterContacts = filterValue =>{
    return {
        type:"filters/setFilter",
    payload: filterValue,
    }
}