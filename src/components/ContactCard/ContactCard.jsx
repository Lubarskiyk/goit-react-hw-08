import { MdDelete, MdEdit, MdPerson, MdPhone } from "react-icons/md";
import { useDispatch } from "react-redux";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { deleteContact } from "../../redux/contacts/operations.js";
import { openCloseModal } from "../../redux/modalContact/slice.js";

export function ContactCard({ data: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(openCloseModal({ id, name, number }));
  };
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <Card className="mt-6">
        <CardBody>
          <Typography
            variant="h5"
            color="blue-gray"
            className="flex items-center gap-3"
          >
            <MdPerson size={20} /> {name}
          </Typography>
          <Typography className="flex items-center gap-3">
            <MdPhone size={20} />
            {number}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex items-center justify-center gap-4 ">
          <Button
            className="flex items-center gap-3 w-32"
            onClick={handleDelete}
          >
            <MdDelete size={20} /> Delete
          </Button>
          <Button className="flex items-center gap-3 w-32" onClick={handleOpen}>
            <MdEdit size={20} /> Edit
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
