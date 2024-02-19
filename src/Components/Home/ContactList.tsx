import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import Contact from './Contact';

export default function ContactList() {
  const contacts = useSelector((state: RootState) => state.contacts);

  return (
    <ul>
      {contacts.map((contact, key) => {
        return <Contact {...contact} key={key} />;
      })}
    </ul>
  );
}
