import { useEffect, useState } from "react"

export function ChildComponent(
    {
        parentData,
        getChildData,
        getCount
    }
){

    const [childData,setChildData] = useState("ChildData-75")
    const [count,setCount] = useState(25)

    getChildData(childData)
    getCount(count)


    return <div>
        <div className="heading">
            <h1> Child Component - {childData}</h1>
            <button onClick={()=>setChildData("Sarathkumar")}>Change child Data</button>
        </div>
        <div className="parent-component-data">
            <p>{parentData}</p>
        </div>
    </div>
}