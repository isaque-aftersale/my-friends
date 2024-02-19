import Button from '../Generics/Button';
import Input from '../Generics/Input';

export default function ContactHandler() {
  return (
    <div className="flex p-2">
      <Input
        placeholder="Contact ID"
        className="w-1/3 p-1 text-white bg-black rounded-l"
      />
      <Button
        text="Save Contact"
        className="p-1 font-medium text-green-200 bg-green-600 rounded-r "
      />
    </div>
  );
}
