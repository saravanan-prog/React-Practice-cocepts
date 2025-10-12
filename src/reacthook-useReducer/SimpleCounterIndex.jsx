

import { useReducer } from "react"
import { reducerAction } from "./action/simpleCounter_action"

export function SimpleCounterIndex(){

    const[count,dispatch] = useReducer(reducerAction,0)

    return <div>
        <div className="heading">
            <p className="h2 text-center">Simple Counter - Use Reducer</p>
        </div>

        <div className="count">
            <p className="h3">current count : {count}</p>
        </div>
        <div className="count-update">
            <button 
                onClick={()=>dispatch({type:"add"})}
            >ADD</button>
            <button 
                onClick={()=>dispatch({type:"sub"})}
            >SUB</button>
            <button
                onClick={()=>dispatch({type:"mul"})}
            >Mul</button>
            <button
                onClick={()=>dispatch({type:"div"})}
            >Div</button>
            <button
                onClick={()=>dispatch({type:"mod"})}
            >Mod</button>
            <button
                onClick={()=>dispatch({type:"reset"})}
            >Reset</button>
        </div>
    </div>
}