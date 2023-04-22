import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deletContact } from 'redux/slice';
import css from 'components/ContactList/ContactList.module.css';


const ContactList = () => {
  const { contacts, filter } = useSelector(state=>state.contacts)
  const dispatch = useDispatch()
 
  const contactS = () => {
    const normalizedFilter = filter.name.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }
  

  return (
  <ul className={css.contactItem}>
    {contactS().map(({ id, name, number }) => (
      <li className={css.contactList} key={id}>
        <p className={css.contactName}>{name}</p>
        <p className={css.contactNumber}>{number}</p>
        <button className={css.button} 
        onClick={() => dispatch(deletContact({id}))}>
          Delete
        </button>
      </li>
    ))}
  </ul>
  )
}

export default ContactList