import { Fragment, useState, useEffect } from "react";
import { AddEmployee } from "./components/AddEmployee";
import { ListAction } from "./components/ListAction";
import { SearchEmployee } from "./components/SearchEmployee";
import { TableViewList } from "./components/TableViewList";
import { 
    getApicall,
    handleUpdate,
    handleDelete,
    addRecord,
    handleSearch

   } from "./actions/EmployeeListIndexAction";
import { EmployeeContext } from "./context/EmployeeContext";


export function EmployeeListIndex() {
  const [list, setList] = useState();
  const [searchText, setSearchText] = useState(null);

  useEffect(() => {
    getApicall(setList);
  }, []);



  return (
    <div>
      <div className="heading">
        <h1>Employee List Management</h1>
      </div>

      <EmployeeContext.Provider
        value={{
          setSearchText: setSearchText,
          handleSearch: handleSearch,
          list: list,
          handleUpdate: handleUpdate,
          handleDelete: handleDelete,
          addRecord: addRecord,
          setList:setList,
          searchText: searchText
        }}
      >
        <div className="search-box">
          <SearchEmployee />
        </div>
        <div className="list">
          <TableViewList />
        </div>
        <div className="add-Records">
          <AddEmployee />
        </div>
      </EmployeeContext.Provider>
    </div>
  );
}
