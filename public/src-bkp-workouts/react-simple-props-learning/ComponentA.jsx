import { useState } from "react";
import { ComponentB } from "./ComponentB";

export function ComponentA() {

    const [candidateName,] = useState("Saravanan")
    const [canidateAge,] = useState(10)
    const [canidateWork,] = useState("Software Engineer")
    const [candidateLocation,] = useState("Chennai")

    return <div>
        <div className="heading">
            <h1>Component A </h1>
        </div>
        <div className="child-component">
            <p>Child Component Rendering</p>

            <ComponentB 
                candidateName = {candidateName}
                canidateAge  = {canidateAge}
                canidateWork = {canidateWork}
                candidateLocation = {candidateLocation}
            />

        </div>
    </div>
}