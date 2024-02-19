import { MouseEventHandler } from 'react';

export type Props = {
  text?: string;
  onClick?: MouseEventHandler;
  className?: string;
};

export default function Button(props: Props) {
  const { text, className, onClick } = props;

  return (
    <button
      className={className ?? ""}
      onClick={(e) => (onClick ? onClick(e) : () => {})}
    >
      {text ?? ""}
    </button>
  );
}
