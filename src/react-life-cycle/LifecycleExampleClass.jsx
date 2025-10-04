import { Component } from "react";

export class LifecycleExampleClass extends Component {
    constructor(props){
        super(props)
        this.state = {
            count:0
        }

        console.log(" 1. I am constructor ")
    }
    componentDidMount(){
        console.log("2. I am componentDidMount ")
    }
    componentDidUpdate(){
        console.log("3. I am componentDidUpdate")
        return '' 
    }
    componentWillUnmount(){
        console.log(" 4. I am render method ")

    }
    render(){

        console.log(" 5. I am render method ")

        return <div>
            <div className="heading">
                <h1> Class Component life Cycle </h1>
            </div>

            <div className="counter-content">
                <p>count:{this.state.count}</p>
                <button 
                    className="btn btn-primary"
                    onClick = {
                        this.setState({count:this.state.count+1})
                    }
                >ADD</button>
            </div>
        </div>
    }
}