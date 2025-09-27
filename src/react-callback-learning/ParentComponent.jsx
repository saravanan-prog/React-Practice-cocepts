import { useState } from "react";

import { ChildComponent } from "./ChildComponent";

export function ParentComponent(){

    const [parentData] = useState("ParentData")
    const [childData,setChildData] = useState("Temp-Data")
    const [showCount,setShowCount] = useState(0)

    const getChildData = (item) => {
        setChildData(item)
    }
    const getCount = (item) => {
        setShowCount(item)
    }

    return <div>
        <div className="heading">
            <h1> Parent Component </h1>
        </div>

        <div className="child-data">
            <p> {childData} </p>
            <p> Count :  {showCount} </p>
        </div>
            
        <div className="child-component">
            <ChildComponent
                parentData = {parentData} // props
                getChildData = {getChildData}
                getCount = {getCount}
            />
        </div>

           
    </div>
}