import {useState} from 'react'
import { handleChange,handleSubmit} from './createUseraction'

export function CreateUser(){ 
    const [formData,setFormData] = useState()
    const [status,setStatus] = useState()

    // const handleChange = (event) => {
    //     const fieldName = event.target.name;
    //     const fieldValue = event.target.value;
    //     setFormData({...formData,[fieldName]:fieldValue})
    // }
    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     console.log("formData====>",formData)

    //     let payload = {
    //         name: formData.candidateName,
    //         job: formData.candidateJob
    //     }

    //     createUserApi(payload)
    // }
    // const createUserApi = async (payload) => {
    //     let url = "https://reqres.in/api/candidate"
    //     let option = getOption(payload)

    //     let response = await fetch(url,option)
    //     console.log("response",response)
    //    // let responseData = await response.json()
    //     if(response.status != '404'){
    //         console.log("Entered true")
    //         setStatus("Reigster success")
    //     }
    //     else{
    //         console.log("Entered false ")
    //         setStatus("Reigster Failure")
    //     }
    // }

    


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