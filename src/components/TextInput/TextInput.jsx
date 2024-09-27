import { Input } from "@material-tailwind/react";

const TextInput = props => {
  const { onChange, onBlur, value, error, success, text } = props;

  return (
    <div>
      <Input
        {...props}
        variant="outlined"
        color="blue-gray"
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        error={error}
        success={success}
      />
      {error && <p className="mt-1 text-red-600 max-w-72">{text}</p>}
      {success && <p className="mt-1 text-green-600 max-w-72">Valid...</p>}
    </div>
  );
};

export default TextInput;
