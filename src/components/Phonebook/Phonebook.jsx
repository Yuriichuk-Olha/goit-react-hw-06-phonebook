import React, {  useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import initialContacts from '../contacts.json'

import Contacts from 'components/Contacts/Contacts';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';


function Phonebook() {
  const [contacts, setContacts]=useState(()=>{
    return JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts;
  });
    const[filter,setFilter]=useState('');

    useEffect(()=>{
      window.localStorage.setItem('contacts', JSON.stringify(contacts))
    },[contacts]);


    const creatUser= (user)=>{
        const newContacts={
          ...user,
          id:nanoid(),
        }
        const existUser = contacts.find(
                  contact => contact.name === user.name
              ) 
        if(existUser){
          return  alert("This name already exists!"); 
        }    
         setContacts(prevState => [newContacts,...prevState])
    };

    
    const changeFilter = e =>{
        setFilter(e.currentTarget.value);
    };

   const deletList = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId),
    );
  }
  
  const getVisibleContacts = () =>{
    const normalizedFilter = filter.toLowerCase()
   return contacts.filter(contact=>contact.name.toLowerCase().includes(normalizedFilter))
  }
  

     return (
      <div>
        <h1>Phonebook</h1>
        <Contacts creatUser={creatUser} />

        
        <h2>Contact</h2>
        <Filter value={filter} onChange={changeFilter}
        />
        <ContactList
         contacts={getVisibleContacts(contacts)}
         
          onDeleteList={deletList}
        />
      </div>
    );
 
}



export default Phonebook;