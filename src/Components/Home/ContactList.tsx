import Contact, { Props } from './Contact';

export default function ContactList() {
  const contacts: Props[] = [
    { id: "35217351731", name: "Isaque" },
    { id: "35217351731", name: "Isaque" },
    { id: "35217351731", name: "Isaque" },
    { id: "35217351731", name: "Isaque" },
    { id: "35217351731", name: "Isaque" },
    { id: "35217351731", name: "Isaque" },
  ];

  return (
    <ul>
      {contacts.map((contact, key) => {
        return <Contact {...contact} key={key} />;
      })}
    </ul>
  );
}
