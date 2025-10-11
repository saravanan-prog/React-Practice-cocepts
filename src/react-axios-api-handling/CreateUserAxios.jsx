import {useState} from 'react'
import { handleChange,handleSubmit} from './createuseraxios_action'

export function CreateUserAxios(){ 
    const [formData,setFormData] = useState()
    const [status,setStatus] = useState()

   


    return <div>
         <div className="container">
             <form onSubmit={(event)=>handleSubmit(event,formData,setStatus)}>
                <div className="well"> { status && status} </div>
                 <div className="row">
                    <label htmlFor="" className="form-label">Candidate Name</label>
                    <input type="text" className="form-input" name="candidateName" onChange={(event)=> handleChange(event,setFormData,formData,setStatus)} />
                 </div>
                 <div className="row">
                    <label htmlFor="" className="form-label">Candidate JOB</label>
                    <input type="text" className="form-input" name="candidateJob" onChange={(event)=>handleChange(event,setFormData,formData,setStatus)} />
                 </div>
                 <div className="row">
                     <input type="submit" className='btn btn-primary' />
                 </div>
             </form>
         </div>
    </div>
}