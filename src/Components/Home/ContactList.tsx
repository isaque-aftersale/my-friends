import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import ContactItem from './ContactItem';

export default function ContactList() {
  const contacts = useSelector((state: RootState) => state.contacts);

  return (
    <ul>
      {contacts.list.map((contact, key) => {
        return <ContactItem contact={contact} key={key} />;
      })}
    </ul>
  );
}
