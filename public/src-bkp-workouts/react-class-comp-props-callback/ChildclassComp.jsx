import { Component } from "react";

export class ChildclassComp extends Component {
    constructor(props){
        super(props)
        this.state = {
            appName:"This is child component",
            count:200
        }

        this.props.getCount(this.state.count)
    }

    render(){
        return <div>
            <div className="heading-secion">
                <h1> {this?.state?.appName} </h1>
            </div>
            <div className="print-parent-state">
                <p>candidate Name : {this?.props?.candidateName}</p>
            </div>
        </div>
    }
}