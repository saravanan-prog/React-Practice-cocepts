import { Component } from "react";
import { ChildclassComp } from "./ChildclassComp";

export class ParentclassComp extends Component {
    constructor(props){
        super(props)
        this.state = {
            candidateName : "Saravanan",
            dataCount:0
        }

        this.getCount = this.getCount.bind(this);
    }

    getCount(item){
       this.setState({dataCount:item})
    }

    render(){
        return <div>
            <div className="heading-secion">
                <h1> This is Parent class Component </h1>
            </div>
            <div className="child-render">
                <ChildclassComp 
                    candidateName = {this.state.candidateName}
                    getCount = {this.getCount}
                />
            </div>
            <div className="show-count">
                <p>Count:{this.state.dataCount}</p>
            </div>
        </div>
    }
}