import { useState } from 'react';

import ContactHandler from '../Components/Home/ContactHandler';
import ContactList from '../Components/Home/ContactList';
import CreateConnect from '../Components/Home/CreateConnect';
import Profile from '../Components/Home/Profile';

export default function HomePage() {
  const [connected, setConnected] = useState(false);

  function handleDisconnect() {
    setConnected(false);
  }

  function handleConnect() {
    setConnected(true);
  }

  return (
    <div className="flex flex-col justify-around p-3">
      <div>
        {connected && <Profile handleDisconnect={handleDisconnect} />}
        {!connected && <CreateConnect handleConnect={handleConnect} />}
      </div>

      <div className="my-3 bg-blue-700 rounded-t">
        <ContactHandler />
        <ContactList />
      </div>
    </div>
  );
}
