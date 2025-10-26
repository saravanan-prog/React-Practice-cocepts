import { useState } from "react";

export function ComponentB(
    {
        candidateName,
        canidateAge,
        canidateWork,
        candidateLocation

    }
) {
    const [profilename ,setProfilename] = useState(candidateName);
    const [profileAge,setProfileAge] = useState(canidateAge)

    return <div>
        <div className="heading">
            <h1>Component B </h1>
            <div className="show-name">
                <p>Candidate Name : {profilename} </p>
                <button 
                    onClick={()=>setProfilename("Raja")}
                > 
                    Change name 
                </button>
            </div>
            <div className="show-age">
                
                <p>Candidate Age   : { profileAge < 1 ? 1 : profileAge} </p>

                <button 
                    onClick={()=>setProfileAge( profileAge + 1 )} 
                > 
                    Add Age 
                </button>
                <button 
                    onClick={()=>setProfileAge( profileAge - 1 )} 
                    disabled = {profileAge < 1 ? true : false}
                > 
                    decrese Age 
                </button>
            </div>
            <div className="show-canidate-work">
                 <p>Candidate Work  : {canidateWork}</p>
            </div>
            <div className="show-candidate-location">
                 <p>Candidate Location : {candidateLocation} </p>
            </div>
        </div>
    </div>
}