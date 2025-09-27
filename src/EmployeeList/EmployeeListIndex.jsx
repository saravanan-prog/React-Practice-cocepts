import { Fragment, useState } from "react";
import EmployeeList from "../assets/data/employeeList.json";
import { AddEmployee } from "./AddEmployee";
import { ListAction } from "./ListAction";
import { SearchEmployee } from "./SearchEmployee";
import { TableViewList } from "./TableViewList";

export function EmployeeListIndex() {
  const [list, setList] = useState(EmployeeList);
  const [searchText, setSearchText] = useState(null);

  const handleUpdate = (profileIndex) => {
    const updatedList = list.map((value, index) => {
      if (profileIndex == index) {
        (value.empid = 5555),
        (value.emp_name = "jayaRaj"),
        (value.designation = "Super Manager"),
        (value.workLocation = "Mumbai");
      }

      return value;
    });

    setList(updatedList);
  };
  const handleDelete = (profileIndex) => {
    const afterDeletelist = list.filter((value, index) => {
      return index != profileIndex;
    });
    setList(afterDeletelist);
  };
  const addRecord = (formData) => {
    setList([...list, formData]);
  };
  const handleSearch = () => {
    const afterSearchNewList = list.filter((value) => {
      return value.empid == searchText ||
        value.emp_name == searchText ||
        value.designation == searchText ||
        value.workLocation == searchText
        ? value
        : null;
    });
    setList(afterSearchNewList);
  };

  return (
    <div>
      <div className="heading">
        <h1>Employee List Management</h1>
      </div>
      <div className="search-box">
        <SearchEmployee
          setSearchText={setSearchText}
          handleSearch={handleSearch}
        />
      </div>
      <div className="list">
        <TableViewList
          list={list}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      </div>
      <div className="add-Records">
        <AddEmployee addRecord={addRecord} />
      </div>
    </div>
  );
}
