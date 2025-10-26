import { ChildComponent } from "./ChildComponent";
import { useState } from "react";

export function ParentComponent(){

    const [count,setCount] = useState(0)
    const [candidteNamelist,setCanidateNamelist] = useState([])

    const parentFunction = () =>{
        console.log("This is Parent Event")
    }

    const getCount = (item) => {
        setCount(item)
    }
    const getName = (name) => {
        console.log("You Recieved Name is = "+ name)
    }
    const getCanidateNames = (nameItem) => {
        setCanidateNamelist([...candidteNamelist,nameItem])
    }

    

    return <div>
         <div className="heading">
            <h1> Props-Callback-Learning session 2 </h1>
            <h3> This is Parent Component </h3>
         </div>
         <div className="counter-program">
            <h3>Count : {count} </h3>
            <button onClick={()=>setCount(count + 1 )}>ADD</button>
         </div>

         <div className="child-render">
            <ChildComponent 
                parentFunction = {parentFunction}
                getCount = {getCount}
                getName = {getName}
                getCanidateNames = {getCanidateNames}
            />
         </div>
        <div className="show-name-list">
             <h3> Candidate name list </h3>
             {(candidteNamelist && candidteNamelist.length !=0) &&
                candidteNamelist.map((value,index)=>{
                    return <p key={index}>{value}</p>
                })
             }
        </div>
        

    </div>
}