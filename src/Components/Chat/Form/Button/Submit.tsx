import { MouseEventHandler } from "react";

export type Props = {
  onClick: MouseEventHandler;
};

export default function Submit(props: Props) {
  const { onClick } = props;

  return (
    <button
      className="p-1 font-medium text-green-900 bg-green-300 rounded"
      onClick={(e) => onClick(e)}
    >
      Submit
    </button>
  );
}
