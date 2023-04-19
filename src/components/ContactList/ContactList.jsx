import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deletContact } from 'redux/slice';
import css from 'components/ContactList/ContactList.module.css';


const ContactList = () => {
  const { contacts } = useSelector(state=>state.contacts)
  // console.log(contacts)
  const dispatch = useDispatch()
 
  return (
  <ul className={css.contactItem}>
    {contacts.map(({ id, name, number }) => (
      <li className={css.contactList} key={id}>
        <p className={css.contactName}>{name}</p>
        <p className={css.contactNumber}>{number}</p>
        <button className={css.button} onClick={() =>dispatch(deletContact({id}))}>
          Delete
        </button>
      </li>
    ))}
  </ul>
  )
}

export default ContactList