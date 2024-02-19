import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ButtonConnect from '../Components/Models/ButtonConnect';
import ButtonDisconnect from '../Components/Models/ButtonDisconnected';
import { RootState } from '../redux/store';
import { userAction } from '../redux/userSlice';
import { socket } from '../socket';

export default function HeaderTemplate() {
  const [connected, setConnected] = useState(false);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  function handleConnect() {
    socket.connect();

    socket.on("connect", () => {
      dispatch(
        userAction.connect({
          id: socket.id,
          connected: socket.connected,
        })
      );
      setConnected(true);
    });
  }

  function handleDisconnect() {
    socket.disconnect();

    dispatch(userAction.disconnect());
    setConnected(false);
  }

  return (
    <header className="flex justify-between px-3 pt-3">
      <div>{connected ? <p className="">User: {user.id}</p> : null}</div>

      <ButtonConnect display={!connected} onClick={handleConnect} />
      <ButtonDisconnect display={connected} onClick={handleDisconnect} />
    </header>
  );
}
