export type Props = {
  value: string;
};

export default function TextContent(props: Props) {
  const { value } = props;

  return <p className=" text-zinc-100">{value}</p>;
}
