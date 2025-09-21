import { Fragment, useState } from "react";
import EmployeeList from "../assets/data/employeeList.json";

export function ListManagement() {
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
  const addRecord = () => {
    let data = {
      empid: 52112,
      emp_name: "DurgaDevi",
      designation: "IT-Manager",
      workLocation: "Chennai",
    };
    setList([...list, data]);
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
        <input
          type="text"
          onChange={(event) => setSearchText(event?.target?.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="list">
        <table border={2}>
          <thead>
            <th> Serial </th>
            <th> Employee Id </th>
            <th> Employee Name </th>
            <th> Employee Designation </th>
            <th> Employee Location </th>
            <th> Action </th>
          </thead>
          <tbody>
            {list && list.length != 0 ? (
              list.map((value, index) => {
                const { empid, emp_name, designation, workLocation } = value;

                return (
                  <Fragment>
                    <tr>
                      <td> {index + 1} </td>
                      <td> {empid} </td>
                      <td> {emp_name} </td>
                      <td> {designation} </td>
                      <td> {workLocation} </td>
                      <td>
                        <button onClick={() => handleUpdate(index)}>
                          Update
                        </button>
                        <button onClick={() => handleDelete(index)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  </Fragment>
                );
              })
            ) : (
              <tr>
                <th colSpan={6}>No Data Found </th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="add-Records">
        <button onClick={addRecord}>ADD Records</button>
      </div>
    </div>
  );
}
