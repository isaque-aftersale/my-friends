import { emit } from 'process';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import FieldsChat from '../Components/Chat/FieldsChat';
import { chatAction } from '../redux/chatSlice';
import { RootState } from '../redux/store';
import { socket } from '../socket';

export default function ChatPage() {
  const [contact, setContact] = useState();
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((state: RootState) => state.user);
  const chat = useSelector((state: RootState) => state.chat);

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { target } = e;

    setInputValue(target.value);
  }

  function handleSendButton() {
    console.log(contact);
  }

  useEffect(() => {
    if (socket.disconnected) return;

    socket.emit("get-user", id);
    socket.on("get-user", (to) => {
      dispatch(
        chatAction.initializeChat({
          from: user,
          to,
        })
      );
      setContact(to);
    });
  });

  return (
    <>
      <h1>CHAT</h1>
      <FieldsChat
        handleInputChange={handleInputChange}
        handleSendButton={handleSendButton}
      />
    </>
  );
}
