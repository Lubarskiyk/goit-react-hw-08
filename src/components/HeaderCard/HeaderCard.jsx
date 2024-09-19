import { CardHeader, Typography } from "@material-tailwind/react";

export default function HeaderCard({ text }) {
  return (
    <CardHeader shadow={false} floated={false} className="text-center">
      <Typography
        variant="h1"
        color="blue-gray"
        className="mb-4 !text-3xl lg:text-4xl "
      >
        {text}
      </Typography>
    </CardHeader>
  );
}
