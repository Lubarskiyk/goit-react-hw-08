import { MdDelete, MdEdit, MdPerson, MdPhone } from "react-icons/md";
import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/contactsOps.js";

// export default function Contact({ data: { name, number } }) {
// const dispatch = useDispatch();
// const handleDelete = () => {
//     dispatch(deleteContact(id));
// };

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function ContactCard({ data: { name, number } }) {
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
        <Button className="flex items-center gap-3 w-32">
          <MdDelete size={20} /> Delete
        </Button>
        <Button className="flex items-center gap-3 w-32">
          <MdEdit size={20} /> Edit
        </Button>
      </CardFooter>
    </Card>
  );
}
