export function ChildComponent3({fruitData,setFruitData}){


    return <div>
         <div className="heading">
             <h1> Child Component3 </h1>
         </div>
         <div className="data">
            <p>{fruitData}</p>
            <button onClick={()=>setFruitData("I have Orange")}>update fruit</button>
         </div>
    </div>
}