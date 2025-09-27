import { useState } from "react";

export function AddEmployee({ addRecord }) {
  const [formData, setFormData] = useState();

  const handleChange = (event) => {
    const fieldname = event?.target?.name;
    const fieldvalue = event?.target?.value;

    setFormData({ ...formData, [fieldname]: fieldvalue });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(formData)
    addRecord(formData);
  };

  return (
    <div>
      <div className="heading">
        <h1> Employee Form </h1>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <label> Employee ID</label>
            <input type="text" name="empid" onChange={handleChange} />
          </div>
          <div className="row">
            <label> Employee Name</label>
            <input type="text" name="emp_name" onChange={handleChange} />
          </div>
          <div className="row">
            <label> Employee Designation</label>
            <input type="text" name="designation" onChange={handleChange} />
          </div>
          <div className="row">
            <label> Employee Location</label>
            <input type="text" name="workLocation" onChange={handleChange} />
          </div>
          <div className="row">
            <input type="submit" value="ADD Records" />
          </div>
        </form>
      </div>
    </div>
  );
}
