import { Typography } from "@material-tailwind/react";

export default function Label({ htmlFor, text }) {
  return (
    <label htmlFor={htmlFor}>
      <Typography
        variant="small"
        color="blue-gray"
        className="block font-medium mb-2"
      >
        {text}
      </Typography>
    </label>
  );
}
