import { MouseEventHandler } from 'react';

import Button from '../Generics/Button';

export type Props = {
  onClick: MouseEventHandler;
  display: boolean;
};

export default function ButtonDisconnect(props: Props) {
  if (!props.display) return <></>;

  return (
    <Button
      text="Disconnect"
      className="p-2 font-medium bg-red-400 rounded"
      onClick={(e) => props.onClick(e)}
    />
  );
}
