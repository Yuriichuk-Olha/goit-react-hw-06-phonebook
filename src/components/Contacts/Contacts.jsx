import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/slice';
import css from 'components/Contacts/Contacts.module.css';


const Contacts = ()=> {
  const dispatch = useDispatch()
  const {contacts} = useSelector((state)=> state.contacts)
  
  const handleChange = (e) =>{
    const valueName = e.currentTarget.value
        if(contacts.find(contact=> contact.name === valueName)){
         return  alert(`This name ${valueName} already exists!`); 
        } 
  } 

    const handleSubmit = e => {
        e.preventDefault(); 
      const form = e.currentTarget 
      dispatch(addContact({ name:form.elements.name.value, number:form.elements.number.value }))
      form.reset()
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
              // value={name}
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
              // value={number}
            />
          </div>
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </form>
      )

}
export default Contacts