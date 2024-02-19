import Button from '../Generics/Button';

export type Props = {
  id: string;
  name: string;
};

export default function Contact(props: Props) {
  const { id, name } = props;

  return (
    <li className="flex flex-wrap items-center content-center justify-around p-2 text-blue-100 bg-blue-700 border-blue-900 border-y-2">
      <p className="flex-grow">
        <span> Name: </span>
        {name}
      </p>
      <p className="flex-grow">
        <span>ID: </span>
        {id}
      </p>
      <div className="flex items-center justify-around flex-grow mt-2">
        <Button text="Open Chat" className="p-2 bg-purple-500 rounded-2xl" />
        <Button text="Remove Contact" className="p-2 bg-red-500 rounded-2xl" />
      </div>
    </li>
  );
}
