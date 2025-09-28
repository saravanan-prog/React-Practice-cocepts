import { useState,useEffect } from "react"

export function ChildComponent( 
     {
        parentFunction,
        getCount,
        getName,
        getCanidateNames
    }
){

    const [count] = useState(100)
    const [canidateName] = useState("Rajesh")
    const [name,setName] = useState()

    /* Parent Component Function Calling */
    useEffect(()=>{
        parentFunction()
        getCount(count) 
        getName(canidateName)
    },[])


    return <div>
         <div className="heading">
            <h3> This is Child Component </h3>
         </div>

        <div className="input-box">
            Enter Name list : 
            <input type="text" 
                onChange = {(event)=> setName(event?.target?.value)}
            /> 
            <button onClick={()=>getCanidateNames(name)}>Submit</button>
        </div>
         
    </div>
}