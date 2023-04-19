import Contacts from 'components/Contacts/Contacts';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import { useDispatch, useSelector } from 'react-redux';
import { addContact, filterContact} from 'redux/slice';
import { useState } from 'react';



function Phonebook() {
  // const filtersed = useSelector(filterContact)
  const dispatch = useDispatch()
  const {name, number,filterContact} = useSelector(state => state.contacts);
  // console.log(filterContact.action.payload)
   const[filter,setFilter]=useState('');

      const createContact= ()=>{
        const user = dispatch(addContact({name, number}))
        
        if(user){
          return  alert("This name already exists!"); 
        }    
            
      };
  
  const changeFilter = e =>{
   

    setFilter(e.currentTarget.value);
};
     return (
      <div>
        <h1>Phonebook</h1>
        <Contacts 
        createUser={createContact} 
        />

        
        <h2>Contact</h2>
        {/* <Filter 
        onChange={changeFilter}
        /> */}
          <Filter value={filter} onChange={changeFilter}/>
        <ContactList />
      </div>
    );
 
}



export default Phonebook;