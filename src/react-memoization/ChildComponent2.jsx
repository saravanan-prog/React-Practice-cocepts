import { memo } from "react"


export default memo(function Childcomponent2(
    {
        clickButton
    }
){

     console.log("Im child 2")
    return <div>
         <div className="heading">
             <p className="">Childcomponent2</p>
             <button onClick={clickButton}>clcik me</button>
         </div>
    </div>
})