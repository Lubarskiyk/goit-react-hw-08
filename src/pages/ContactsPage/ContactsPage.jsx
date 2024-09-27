import { useDispatch } from "react-redux";
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { AddContactDialog } from "../../components/AddContactModal/AddContactModal.jsx";
import { fetchContacts } from "../../redux/contacts/operatins.js";
import SearchBox from "../../components/SearchBox/SearshBox.jsx";
import ContactList from "../../components/ContactList/ContactList.jsx";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(cur => !cur);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <SearchBox />
          <Button onClick={handleOpen}>Add Contact</Button>
        </div>
        <ContactList />
      </div>
      <AddContactDialog open={open} handleOpen={handleOpen} />
    </>
  );
}
