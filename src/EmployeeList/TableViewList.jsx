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
                    <td>{index + 1}</td>
                    <td>
                      {!updateFlag ? (
                        empid
                      ) : (
                        <input type="text" value={empid} name="empid"  />
                      )}
                    </td>
                    <td>
                      {!updateFlag ? (
                        emp_name
                      ) : (
                        <input type="text" value={emp_name} name="emp_name" />
                      )}
                    </td>
                    <td>
                      {!updateFlag ? (
                        designation
                      ) : (
                        <input type="text" value={designation} name="designation" />
                      )}
                    </td>
                    <td>
                      {!updateFlag ? (
                        workLocation
                      ) : (
                        <input type="text" value={workLocation} name="workLocation" />
                      )}
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
