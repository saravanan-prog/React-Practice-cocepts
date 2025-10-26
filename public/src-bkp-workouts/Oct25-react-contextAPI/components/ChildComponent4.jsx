
import { useContext } from "react"
import { PersonContext } from "../context/PersonContext"

export function ChildComponent4(){

    const data = useContext(PersonContext)

    console.log("data=====>",data)

    return <div>
        <div className="heading">
             <p className="h2"> ChildComponent4</p>
        </div>
    </div>
}