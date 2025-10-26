import { useState } from "react";
import { ChildComponent1 } from "./components/ChildComponent1";

export function ParentComponent(){

    const [fruitData,setFruitData] = useState("I have Apple")

    return <div>
         <div className="heading">
             <h1> Props Drilling </h1>
         </div>

         <div className="child-comp">
            <ChildComponent1
                fruitData = {fruitData}
                setFruitData = {setFruitData}

            />
         </div>
    </div>
}