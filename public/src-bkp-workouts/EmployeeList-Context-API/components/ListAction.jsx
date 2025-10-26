import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

export function ListAction({ handleUpdate, handleDelete, index }) {

  const {list,setList} = useContext(EmployeeContext)

  return (
    <div>
    
      <button onClick={() => handleUpdate(index)}>Update</button>
      <button onClick={() => handleDelete(index,list,setList)}>Delete</button>
    </div>
  );
}
