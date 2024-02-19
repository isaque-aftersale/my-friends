import { MouseEventHandler } from 'react';

import Button from '../Generics/Button';
import Input from '../Generics/Input';

export type Props = {
  handleConnect: MouseEventHandler;
};

export default function CreateConnect(props: Props) {
  const { handleConnect } = props;

  return (
    <div className="w-max">
      <h1 className="p-1 text-center text-blue-200 bg-blue-600 rounded-t-md">
        Create Connection
      </h1>
      <Input
        placeholder="User Name"
        className="p-1 text-white bg-slate-600 rounded-bl-md"
      />
      <Button
        text="Connect"
        className="p-1 text-green-200 bg-green-600 rounded-br-md"
        onClick={(e) => handleConnect(e)}
      />
    </div>
  );
}
