import { ChangeEventHandler } from 'react';

export type Props = {
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function FieldSendTo(props: Props) {
  return (
    <input
      type="text"
      name="chat"
      id="chat"
      className="w-full border-2 border-black"
      onChange={(e) => props.onChange(e)}
    />
  );
}
