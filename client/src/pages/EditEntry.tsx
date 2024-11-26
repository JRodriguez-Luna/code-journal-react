
import { useNavigate } from "react-router-dom";
import { data, writeData } from "../lib/data";
import { FaPencil } from "react-icons/fa6";

interface EditEntryProps {
  entryId: number;
}

export function EditEntry({ entryId }: EditEntryProps) {
const navigate = useNavigate()

const handleEdit = () => {
const editEntry = data.entries.find((entry) => entry.entryId === entryId);

if (editEntry) {
  data.editing = editEntry;
  writeData();
    navigate(`/edit`, { state:  { entry: editEntry } });
  }
};

return (
  <button onClick={handleEdit}>
    <FaPencil className="cursor-pointer"/>
  </button>
);
}
