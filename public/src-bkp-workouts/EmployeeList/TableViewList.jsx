import { Fragment, useState } from "react";
import { ListAction } from "./ListAction";
export function TableViewList({ list, handleUpdate, handleDelete }) {
  const [updateFlag, setUpdateFlag] = useState(false);

  const updateEvent = (index) => {
    setUpdateFlag(true);
    handleUpdate(index);
  };

  return (
    <div>
      <table border={2} className="table table-stripped m-3">
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
                    <td>{index + 1}</td>
                    <td>
                      {empid}
                    </td>
                    <td>
                      {emp_name}
                    </td>
                    <td>
                      {designation}
                    </td>
                    <td>
                      {workLocation}
                    </td>
                    <td>
                      <ListAction
                        handleUpdate={()=>updateEvent(index)}
                        handleDelete={handleDelete}
                        index={index}
                      />
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
  );
}
