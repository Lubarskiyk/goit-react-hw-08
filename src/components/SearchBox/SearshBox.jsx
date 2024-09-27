import { nameFilter } from "../../redux/filters/slice.js";
import { useDispatch } from "react-redux";
import TextInput from "../TextInput/TextInput.jsx";

export default function SearchBox() {
  const dispatch = useDispatch();
  return (
    <div>
      <TextInput
        type="text"
        label="Search"
        onChange={e => dispatch(nameFilter(e.target.value))}
      />
    </div>
  );
}
