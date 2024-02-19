import { MouseEventHandler } from 'react';

export type Props = {
  onClick: MouseEventHandler;
};

export default function Submit(props: Props) {
  const { onClick } = props;

  return (
    <button
      className="p-1 font-medium text-purple-900 bg-purple-300 rounded"
      onClick={(e) => onClick(e)}
    >
      Submit
    </button>
  );
}
