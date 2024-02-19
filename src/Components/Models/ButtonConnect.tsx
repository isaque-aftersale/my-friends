import { MouseEventHandler } from 'react';

import Button from '../Generics/Button';

export type Props = {
  onClick: MouseEventHandler;
  display?: boolean;
};

export default function ButtonConnect(props: Props) {
  if (!props.display) return <></>;

  return (
    <Button
      text="Connect"
      className="p-2 font-medium bg-green-400 rounded"
      onClick={(e) => props.onClick(e)}
    />
  );
}
