import { useState } from "react";
import { ChildComponent1 } from "./components/ChildComponent1";
import { PersonContext } from "./context/PersonContext";
import { ChildComponent2 } from "./components/ChildComponent2";
import { ChildComponent3 } from "./components/ChildComponent3";
import { ChildComponent4 } from "./components/ChildComponent4";
import employeelist from '../assets/data/employeeList.json'


export function ParentComponent(){

   
    const [employees,setEmployees] = useState(employeelist)
    

    return <div>
        <div className="heading">
             <p className="h2 text-center"> Context API Parent Component </p>
        </div>

        <div className="content">
             
            <PersonContext.Provider value = {
                {
                    employees : employees,
                }
            }>
                <ChildComponent1 />
                <ChildComponent2 />
                <ChildComponent3 />
                <ChildComponent4 />
            </PersonContext.Provider>
            

          


        </div>
    </div>
}