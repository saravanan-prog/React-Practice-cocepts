import { ChildComponent3 } from "./ChildComponent3";

export function ChildComponent2({fruitData,setFruitData}){


    return <div>
         <div className="heading">
             <h1> Child Component2 </h1>
         </div>
         <div className="child">
            <ChildComponent3
                fruitData = {fruitData}
                setFruitData = {setFruitData}
            />
         </div>
    </div>
}