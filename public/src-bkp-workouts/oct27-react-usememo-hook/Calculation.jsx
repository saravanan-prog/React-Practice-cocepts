import { useState ,useMemo} from "react"

export function Calculation(){

    const [count,setCount] = useState(0)
     //const result  = sumofCalculation(count) 
    const result  = useMemo(()=> sumofCalculation(count) , [count])

    return <div>
          <div className="heading">
              <p className="h1"> Use Memo Example - Calculation Program </p>
          </div>
          <div className="counter">
             <p>count : {count} </p>
              <button onClick={()=>setCount(count + 1)}> ADD count</button>
             <p>result : {result} </p>
          </div>
    </div>
}

const sumofCalculation = (num) => {
   
    for(let i=0; i<1000000000; i++)
        num += 1 


    return num
}