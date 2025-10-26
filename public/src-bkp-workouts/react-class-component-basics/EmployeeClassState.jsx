import { Component } from "react";
import employeeData from '../assets/data/employeeList.json'

export class EmployeeClassState extends Component {

    constructor(){
        super()
        this.state = {
            employeeList : employeeData
        }
    }

    render(){
        return <div>
              {JSON.stringify(this.state.employeeList)}
        </div>
    }

}