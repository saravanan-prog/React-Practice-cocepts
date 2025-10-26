import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

export function SearchEmployee() {
  const { handleSearch, setSearchText,searchText,list,setList } = useContext(EmployeeContext);

  return (
    <div>
      <input
        className="form-input rounded w-75"
        type="text"
        onChange={(event) => setSearchText(event?.target?.value)}
      />
      <button onClick={()=>handleSearch(list,searchText,setList)} className="btn btn-secondary ms-3">
        Search
      </button>
    </div>
  );
}
