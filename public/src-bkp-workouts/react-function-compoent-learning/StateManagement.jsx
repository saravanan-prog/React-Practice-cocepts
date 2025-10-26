import { useState, Fragment } from "react";

export function StateManagment() {
  const [count] = useState(300);
  const [candidateName] = useState("Saravanan");
  const [candidateScore] = useState(25.0);
  const [candidateSubject] = useState([
    "Tamil",
    "English",
    "Science",
    "Social",
  ]);
  const [studentList] = useState([
    {
      studentId: 4211,
      studentName: "Saravanan",
    },
    {
      studentId: 42112,
      studentName: "Rajesh",
    },
    {
      studentId: 421113,
      studentName: "Asima",
    },
  ]);

  return (
    <div>
      <h1> State Mangement </h1>
      <p> count : {count}</p>
      <p>Candidate Name : {candidateName}</p>
      <p>Candidate Score : {candidateScore}</p>
      <p>Canidate Subject:</p>

      <ul className="subject-list">
        {candidateSubject && candidateSubject.length != 0 ? (
          candidateSubject.map((value, index) => {
            return <li key={index}>{value}</li>;
          })
        ) : (
          <li>Currently No Subject Found </li>
        )}
      </ul>

      <h3> Student List </h3>
      <table border={2}>
        <thead>
          <tr>
            <th> Student ID</th>
            <th> Student Name</th>
          </tr>
        </thead>
        <tbody>
          {studentList && studentList.length != 0 ? (
            studentList.map((value, index) => {
              const { studentId, studentName } = value;
              return (
                <Fragment key={index}>
                  <tr>
                    <td>{studentId}</td>
                    <td>{studentName}</td>
                  </tr>
                </Fragment>
              );
            })
          ) : (
            <tr>
              <td colSpan={2}>No Records Found </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
