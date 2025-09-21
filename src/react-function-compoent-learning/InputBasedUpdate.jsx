import { useState } from "react"

export function InputBasedUpdate(){

    const [inputData,setInputData] = useState(null)
    const [list,setList] = useState([])


    return <div>
         <div className="heading">
            <h1> Form Input </h1>
         </div>
         <div className="input">
             <input type="text" onChange={(event)=>setInputData(event?.target?.value)} />
             <button onClick ={()=>setList([...list,inputData])}>ADD</button>
         </div>
         <div className="list-data">
            {(list && list.length !=0)?
            (
              list.map((value,index)=>{
                 return <p key={index}>{value}</p>
              })
            ):(
                <h3>No Data Found</h3>
            )}
         </div>
    </div>
}