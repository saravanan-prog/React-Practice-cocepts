import { useState } from "react";

export function EmployeeForm() {

  const [formData,setFormData] = useState()

  const handleChange = (event)=> {
     const fieldname = event?.target?.name
     const fieldvalue = event?.target?.value

    setFormData({...formData,[fieldname]:fieldvalue})
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
  }

  return (
    <div>
      <div className="heading">
        <h1> Employee Form </h1>
      </div>
      <div className="form">
          <form onSubmit={handleSubmit}>
               <div className="row">
                   <label> Employee Name</label>
                   <input type="text" name ="empname" onChange={handleChange} />
               </div>
               <div className="row">
                    <label> Employee Location</label>
                    <input type="text" name ="emplocation" onChange={handleChange} />
               </div>
               <div className="row">
                  <input type="submit" />
               </div>
          </form>
      </div>
    </div>
  );
}
