import { Component } from "react";

export class LearningConstructor extends Component {
    constructor(){
        super()

        this.state = {
            applicationName:"Constructor Learning",
            canidateName:"Mr.Saravanan",
            role:"Developer",
            degree:["BCA","MCA","M.tech","PHD"],
            experience : [
                {
                    title:"TCS",
                    role:"React Developer",
                    period:"2022-2016"
                },
                {
                    title:"CTS",
                    role:"Angular Developer",
                    period:"2020-2022"
                },
                 {
                    title:"Wipro",
                    role:"Full stack Developer",
                    period:"2019-2020"
                }
            ]
        }

        
    }

    render(){
        return <div>
             <h1> {this.state?.applicationName} </h1>
             <p> Name : {this.state?.canidateName} </p>
             <p> Role : {this.state?.role} </p>
             <p> Qualification : {this.state?.degree} </p>
             <p> Experiece : {JSON.stringify(this.state?.experience[0]?.title)} </p>
        </div>
    }
}