//import React, { Component } from 'react';
import css from 'components/Contacts/Contacts.module.css';
import { useState } from 'react';

const Contacts = ({creatUser})=> {
  const [name,setName]=useState('');
  const [number,setNumber]=useState('');

  const handleChange = event => {
       const {name, value}=event.target;
      switch(name){
        case 'name':
          setName(value);
          break;
  
        case 'number':
          setNumber(value);
          break;
  
          default:
            return;
    }
  }
    const handleSubmit = e => {
        e.preventDefault(); 
        
        creatUser({
          name,
          number 
        }) 
                
      setName('')
      setNumber('')
  }

      return (
        <form className={css.container} onSubmit={handleSubmit}>
          <div>
            <label className={css.contactName} htmlFor="name">
              Name
            </label>
            <input
              className={css.formInput}
              name="name"
              type="text"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
              onChange={handleChange}
              value={name}
            />
          </div>
          <div>
            <label className={css.contactName} htmlFor="number">
              Number
            </label>
            <input
              className={css.formInput}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleChange}
              value={number}
            />
          </div>
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </form>
      )

}
export default Contacts