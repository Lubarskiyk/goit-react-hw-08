import { MdDelete, MdEdit, MdPerson, MdPhone } from "react-icons/md";
import { useDispatch } from "react-redux";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { deleteContact } from "../../redux/contacts/operatins.js";

export function ContactCard({ data: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <Card className="mt-6">
      <CardBody>
        <Typography
          variant="h5"
          color="blue-gray"
          className="flex items-center gap-3"
        >
          <MdPerson /> {name}
        </Typography>
        <Typography className="flex items-center gap-3">
          <MdPhone />
          {number}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 flex items-center justify-center gap-4 ">
        <Button className="flex items-center gap-3 w-32" onClick={handleDelete}>
          <MdDelete size={20} /> Delete
        </Button>
        <Button className="flex items-center gap-3 w-32">
          <MdEdit size={20} /> Edit
        </Button>
      </CardFooter>
    </Card>
  );
}
