import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { contactAction } from '../../redux/contactsSlice';
import { RootState } from '../../redux/store';
import { socket } from '../../socket';
import Button from '../Generics/Button';
import Input from '../Generics/Input';

export default function ContactHandler() {
  const dispatch = useDispatch();
  const [contactIdInputValue, setContactIdInputValue] = useState("");
  const user = useSelector((state: RootState) => state.user);

  function handleContactIdInput(e: ChangeEvent<HTMLInputElement>) {
    const { target } = e;

    setContactIdInputValue(target.value);
  }

  function handleSaveContact() {
    socket.emit("user-save-contact", { id: contactIdInputValue });

    socket.on("user-save-contact", (contact) => {
      dispatch(contactAction.saveContact(contact));
      socket.off("user-save-contact");
    });
  }

  return user.connected ? (
    <div className="flex p-2">
      <Input
        placeholder="Contact ID"
        className="w-1/3 p-1 text-white bg-black rounded-l"
        onChange={handleContactIdInput}
      />
      <Button
        text="Save Contact"
        className="p-1 font-medium text-green-200 bg-green-600 rounded-r"
        onClick={handleSaveContact}
      />
    </div>
  ) : (
    <></>
  );
}
