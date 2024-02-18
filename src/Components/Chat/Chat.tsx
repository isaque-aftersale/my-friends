import Content, { SendBy } from "./Contents/Content";
import TextContent from "./Contents/TextContent";
import Submit from "./Form/Button/Submit";
import FieldChat from "./Form/FieldChat";

export type Props = {};

export default function Chat(props: Props) {
  function handleSubmitMessage() {}

  return (
    <div className="flex flex-col justify-between h-full p-2">
      <div className="flex flex-col">
        <Content
          send_by={SendBy.RECIPIENT}
          created_by="RECIPIENT"
          created_at="22:42 - 17/02/24"
        >
          <TextContent value="Hello World RECIPIENT !!!" />
        </Content>

        <Content
          send_by={SendBy.SENDER}
          created_by="SENDER"
          created_at="22:45 - 17/02/24"
        >
          <TextContent value="Hello World SENDER !!!" />
        </Content>
      </div>

      {/* FORMULARY */}
      <div className="flex items-center">
        <FieldChat />
        <Submit onClick={handleSubmitMessage} />
      </div>
    </div>
  );
}
