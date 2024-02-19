import { ChangeEventHandler, MouseEvent, MouseEventHandler } from 'react';

import Button from '../Generics/Button';
import Input from '../Generics/Input';

export type Props = {
  handleInputChange: ChangeEventHandler;
  handleSendButton: MouseEventHandler;
};

export default function InputChat(props: Props) {
  const { handleInputChange, handleSendButton } = props;

  return (
    <div>
      <Input
        className="p-1 bg-blue-300 rounded-l"
        placeholder="You Message"
        onChange={handleInputChange}
      />
      <Button
        className="p-1 bg-blue-400 rounded-r"
        text="Send"
        onClick={handleSendButton}
      />
    </div>
  );
}
