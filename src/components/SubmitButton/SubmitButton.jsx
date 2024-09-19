import { Button } from "@material-tailwind/react";

export default function SubmitButton({ text }) {
  return (
    <Button
      type="submit"
      size="lg"
      color="blue-gray"
      fullWidth
      className="hover:bg-blue-gray-900"
    >
      {text}
    </Button>
  );
}
