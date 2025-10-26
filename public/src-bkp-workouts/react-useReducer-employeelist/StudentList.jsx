import { Fragment, useReducer } from "react";
import studentList from "./student.json";
import { reducerAction } from "./action/studentlist_action";

export function StudentList() {
  const [student, dispatch] = useReducer(reducerAction, studentList);
  return (
    <div>
      <div className="heading">
        <p className="h2 text-center">Student List</p>
      </div>
      <div className="list">
        <table>
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {student && student.length != 0 ? (
              student.map((value, index) => {
                const { studentID, studentName } = value;
                return (
                  <Fragment key={index}>
                    <tr>
                      <td>{studentID}</td>
                      <td>{studentName}</td>
                      <td>
                        <button onClick={()=>dispatch({type:"update",id:index})}>update</button>
                        <button onClick={()=>dispatch({type:"delete",id:index})}>delete</button>
                      </td>
                    </tr>
                  </Fragment>
                );
              })
            ) : (
              <tr>
                <th rowSpan={3}> No records Found </th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
