
import { useEffect, useLayoutEffect, useRef } from "react"

export function Exampleusref(){

    const pref = useRef()
    const inputRef = useRef()


  
    useEffect(()=>{

        pref.current.innerHTML = `<b> Saravanan is a Software Developer </b>`

        inputRef.current.focus()
        inputRef.current.value = "example"


    },[])



    return <div>
         <div className="heading">
              <p className="h2">Use Ref hook Example</p>
         </div>

         <div className="contents">
             <p ref={pref}> Hello Saravanan Durai ss </p>
             <input type="text" ref={inputRef} />
         </div>
    </div>
}