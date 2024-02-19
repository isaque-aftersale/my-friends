import Contact, { Props } from './Contact';

export default function ContactList() {
  const contacts: Props[] = [];

  return (
    <ul>
      {contacts.map((contact, key) => {
        return <Contact {...contact} key={key} />;
      })}
    </ul>
  );
}
