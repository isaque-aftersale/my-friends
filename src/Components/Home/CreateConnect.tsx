import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { userAction } from '../../redux/userSlice';
import { socket } from '../../socket';
import Button from '../Generics/Button';
import Input from '../Generics/Input';

export type Props = {
  setConnected: (is: boolean) => void;
};

export default function CreateConnect(props: Props) {
  const dispatch = useDispatch();
  const [userNameInputValue, setUserNameInputValue] = useState("");
  const { setConnected } = props;

  function handleUserNameInput(e: ChangeEvent<HTMLInputElement>) {
    const { target } = e;

    setUserNameInputValue(target.value);
  }

  function handleConnect() {
    socket.connect();

    socket.on("connect", () => {
      socket.emit("user-create-connection", {
        name: userNameInputValue,
      });

      socket.on("user-create-connection", (user) => {
        dispatch(userAction.connect(user));
        socket.off("user-create-connection");
      });
    });

    setConnected(true);
  }

  return (
    <div className="w-max">
      <h1 className="p-1 text-center text-blue-200 bg-blue-600 rounded-t-md">
        Create Connection
      </h1>
      <Input
        placeholder="User Name"
        className="p-1 text-white bg-slate-600 rounded-bl-md"
        onChange={handleUserNameInput}
      />
      <Button
        text="Connect"
        className="p-1 text-green-200 bg-green-600 rounded-br-md"
        onClick={handleConnect}
      />
    </div>
  );
}
