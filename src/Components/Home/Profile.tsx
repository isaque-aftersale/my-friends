import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import { userAction } from '../../redux/userSlice';
import { socket } from '../../socket';
import Button from '../Generics/Button';

export type Props = {
  setConnected: (is: boolean) => void;
};

export default function Profile(props: Props) {
  const { setConnected } = props;
  const user = useSelector((state: RootState) => state.user);
  const [alert, setAlert] = useState<string | null>(null);
  const dispatch = useDispatch();

  function handleCopyID() {
    navigator.clipboard.writeText(user.id);
    setAlert("ID copy");

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  function handleDisconnect() {
    socket.disconnect();

    dispatch(userAction.disconnect());

    setAlert("User disconected");

    setConnected(false);
  }

  return (
    <>
      <p
        style={{ display: alert ? "block" : "none" }}
        className="absolute right-0 p-2 m-5 font-bold bg-green-300 rounded-lg"
      >
        {alert}
      </p>
      <div className="flex content-center h-20">
        <img
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          alt="icon"
          className="object-cover bg-green-400 border-r border-green-600 rounded-l"
        />

        <div>
          <p className="px-1 font-semibold bg-green-400 h-1/2">
            Name: {user.name}
          </p>

          <p className="px-1 font-semibold bg-green-400 border-t border-green-600 h-1/2">
            <Button text={`ID: ${user.id} ⌨`} onClick={handleCopyID} />
          </p>
        </div>

        <Button
          text="Disconect"
          className="px-1 font-medium text-red-200 bg-red-600 rounded-r"
          onClick={handleDisconnect}
        />
      </div>
    </>
  );
}
