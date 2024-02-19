import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { contactsAction } from '../../redux/contactsSlice';
import { User } from '../../redux/userSlice';
import Button from '../Generics/Button';

export type Props = {
  contact: User.State;
};

export default function ContactItem(props: Props) {
  const { contact } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleOpenChat() {
    navigate(`/chat/${contact.id}`);
  }

  function handleDeleteContact() {
    dispatch(contactsAction.delete({ id: contact.id }));
  }

  return contact ? (
    <li className="flex flex-wrap items-center content-center justify-around p-2 text-blue-100 bg-blue-700 border-blue-900 border-y-2">
      <p className="flex-grow">
        <span> Name: </span>
        {contact.name}
      </p>
      <p className="flex-grow">
        <span>ID: </span>
        {contact.id}
      </p>
      <div className="flex items-center justify-around flex-grow mt-2">
        <Button
          text="Open Chat"
          className="p-2 bg-purple-500 rounded-2xl"
          onClick={handleOpenChat}
        />
        <Button
          text="Remove Contact"
          className="p-2 bg-red-500 rounded-2xl"
          onClick={handleDeleteContact}
        />
      </div>
    </li>
  ) : (
    <></>
  );
}
