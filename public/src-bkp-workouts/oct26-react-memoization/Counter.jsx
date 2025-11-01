import { useCallback, useState } from "react"
import  Childcomponent1  from "./Childcomponent1"
import  Childcomponent2  from "./ChildComponent2"

export function Counter(){

    const [count,setCount] = useState(0)
    const [mulcount,setMulcount] = useState(100)

    const clickButton = useCallback(()=>{
        console.log("Button clicked")
    },[])

    return <div>
         <div className="heading">
             <p className="h1">Counter Program</p>
         </div>
         <div className="content">
            <p className="">Count : {count} </p>
            <button onClick={()=>setCount(count + 1)}>ADD</button>
         </div>

         <div className="child">
             <Childcomponent1 
                count = {count}
               
             />
             <Childcomponent2 
             
                clickButton = {clickButton}
             />
         </div>
    </div>
}