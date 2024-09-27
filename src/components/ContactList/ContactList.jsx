import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/filters/selectors.js";
import { ContactCard } from "../ContactCard/ContactCard.jsx";

export default function ContactList() {
  const filteredBook = useSelector(selectVisibleContacts);
  return (
    <ul className="flex justify-center flex-wrap gap-4">
      {filteredBook.map(data => (
        <li key={data.id}>
          <ContactCard data={data} />
        </li>
      ))}
    </ul>
  );
}
