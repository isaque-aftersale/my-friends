import { useState } from 'react';

import ContactHandler from '../Components/Home/ContactHandler';
import ContactList from '../Components/Home/ContactList';
import CreateConnect from '../Components/Home/CreateConnect';
import Profile from '../Components/Home/Profile';

export default function HomePage() {
  const [connected, setConnected] = useState(false);

  return (
    <div className="flex flex-col justify-around p-3">
      <div className="flex flex-wrap-reverse justify-between">
        {connected && <Profile setConnected={setConnected} />}
        {!connected && <CreateConnect setConnected={setConnected} />}

        <h1 className="p-3 text-2xl font-bold text-center">My Friends</h1>
      </div>

      <div className="my-3 bg-blue-700 rounded-t">
        <ContactHandler />
        <ContactList />
      </div>
    </div>
  );
}
