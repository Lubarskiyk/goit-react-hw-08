import { useDispatch } from "react-redux";
import { Button } from "@material-tailwind/react";
import { useEffect } from "react";
import { AddContactDialog } from "../../components/ContactModal/ContactModal.jsx";
import { fetchContacts } from "../../redux/contacts/operations.js";
import SearchBox from "../../components/SearchBox/SearshBox.jsx";
import ContactList from "../../components/ContactList/ContactList.jsx";
import { openCloseModal } from "../../redux/modalContact/slice.js";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const items = {
    name: "",
    number: "",
    id: "",
  };

  const handleOpen = () => dispatch(openCloseModal(items));
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <div>
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <SearchBox />
          <Button onClick={handleOpen}>Add Contact</Button>
        </div>
        <ContactList />
      </div>
      <AddContactDialog />
    </div>
  );
}
