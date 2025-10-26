import { ChildComponent2 } from "./ChildComponent2";

export function ChildComponent1({fruitData,setFruitData}){


    return <div>
         <div className="heading">
             <h1> Child Component1 </h1>
         </div>
         <div className="child">
            <ChildComponent2 
                fruitData = {fruitData}
                setFruitData = {setFruitData}
            />
         </div>
    </div>
}