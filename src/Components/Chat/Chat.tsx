import { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import { socket } from '../../socket';
import Content, { SendBy } from './Contents/Content';
import TextContent from './Contents/TextContent';
import Submit from './Form/Button/Submit';
import FieldChat from './Form/FieldChat';
import FieldSendTo from './Form/FieldSendTo';

export default function Chat() {
  const user = useSelector((state: RootState) => state.user);
  const [value, setValue] = useState("");
  const [sendTo, setSendTo] = useState("");
  const [messages, setMessages] = useState<
    { from: string; to: string; value: string }[]
  >([]);

  function handleFieldSendTo(e: ChangeEvent<HTMLInputElement>) {
    const { target } = e;

    setSendTo(target.value);
  }

  function handleFieldChat(e: ChangeEvent<HTMLInputElement>) {
    const { target } = e;

    setValue(target.value);
  }

  function handleSubmitMessage() {
    if (socket.disconnected) {
      socket.emit("send", {
        value: "you are offline 📛",
      });
    }

    if (socket.connected) {
      socket.emit("send", {
        from: user.id,
        to: sendTo,
        value: value,
      });
    }

    socket.on("send", (data) => {
      setMessages([...messages, data]);
    });
  }

  return (
    <div className="flex flex-col justify-between p-2 h-1/3">
      <div>
        <label>Send To</label>
        <FieldSendTo onChange={handleFieldSendTo} />
      </div>
      <div className="flex flex-col">
        {messages.map((data) => (
          <Content
            send_by={SendBy.SENDER}
            created_by="SENDER"
            created_at={"22:45 - 17/02/24"}
          >
            <TextContent value={data.value} />
          </Content>
        ))}
      </div>

      {/* FORMULARY */}
      <div className="flex items-center">
        <FieldChat onChange={handleFieldChat} />
        <Submit onClick={handleSubmitMessage} />
      </div>
    </div>
  );
}
