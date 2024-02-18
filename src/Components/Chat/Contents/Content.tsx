import { ReactNode } from "react";

export enum SendBy {
  SENDER,
  RECIPIENT,
}

export type Props = {
  created_by: string;
  created_at: string;
  children: ReactNode;
  send_by: SendBy;
};

export default function Content(props: Props) {
  const { created_by, created_at, children, send_by } = props;

  const contentSide = send_by === SendBy.SENDER ? "self-end" : "";
  return (
    <div className={`w-max h-max ${contentSide}`}>
      <div className="flex justify-between font-mono text-xs">
        <p>{created_by}</p> <p>{created_at}</p>
      </div>
      <div className="p-2 bg-blue-800 rounded">{children}</div>
    </div>
  );
}
