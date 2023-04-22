import React from "react";
import css from '../Filter/Filter.module.css'
import { useDispatch } from "react-redux";
import { setFilter } from "redux/slice";

const Filter = () =>{
    const dispatch=useDispatch()

    const changeFilter = e =>{
        const form = e.target.value 
        dispatch(setFilter({name:form}))

    };
    return(
        <label htmlFor="name">Find contacts by name
        <input name="name" type="text"
        onChange={changeFilter} 
        // value={filterContact}
        className={css.input}                
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                required
        />
    </label>
    )
   
}


export default Filter;