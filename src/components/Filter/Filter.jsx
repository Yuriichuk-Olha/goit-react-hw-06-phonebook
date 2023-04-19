import React from "react";
import css from '../Filter/Filter.module.css'
// import { useDispatch, useSelector } from "react-redux";
// import { filterContact } from "redux/slice";

const Filter = ({value, onChange}) =>{
    return(
         <label htmlFor="name">Find contacts by name
        <input name="name" type="text"
        onChange={onChange} value={value}
        className={css.input}                
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                required
        />
    </label>
    )
   
}


// const Filter = () =>{
//     // const filter = useSelector(state.filters.name)
//     // const filter = useSelector(filterContact)
//     console.log(useSelector(filterContact))
//     // const dispatch= useDispatch()

//     // const handeleFilterSearch = filter => dispatch(filter)

//     const changeFilter = e =>{
//         const form = e.target.value
//         console.log(form)
        
//       };
//     return(
//          <label htmlFor="name">Find contacts by name
//         <input name="name" type="text"
//         onChange={changeFilter} 
//         // value={filter.value}
//         className={css.input}                
//                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 required
//         />
//     </label>
//     )
// }



export default Filter;