import { useState, useEffect } from "react";

export function FcLifecycleExample() {


  const [price,setPrice] = useState(1000)  
  const [tax,setTax] = useState(price*5/100)

  useEffect(() => {
    console.log("useEffect is Rendering....")

    let taxCalc = price*5/100

    setTax(taxCalc)

    return(
        ()=> {
            console.log("2. unmounting Phase")
            taxCalc = 0
        }
    )

  }, [price]);

  useEffect(()=>{
    console.log("2. UseEFFECT")
  },[])



  return (
    <div>
      <div className="heading">
        <h1>Function Component Life Cycle Learning</h1>
      </div>

  


       <div className="conter">
        <p> Price : {price} </p>
        <p> your Tax: {tax} </p>
        <button
            onClick = {()=>setPrice(price + 100)}
        >
            increasePrice + 100
        </button>
      </div>


    </div>
  );
}
