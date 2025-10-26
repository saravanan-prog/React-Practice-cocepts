import { Component } from "react";

export class CounterProgram extends Component {
    constructor(){
        super()
        this.state = {
            count : 0,
            decrementCount:100,
            multiplicationData: 200
        }
        this.decrement = this.decrement.bind(this);
        this.multiplyBy5 =  this.multiplyBy5.bind(this);
    }

    decrement(){
        this.setState({
            decrementCount :  this.state.decrementCount-1
        })
       
    }
    multiplyBy5(){
        this.setState(
            {
                multiplicationData : this.state.multiplicationData * 5
            }
        )
    }


    render() {
        return <div>
            <div className="heading">
                 <h1> Counter Program </h1>
            </div>
            <div className="display-add-count">
                <p> Count : { this?.state?.count } </p>
                <button onClick={() => this.setState({count: this.state.count + 1 }) }> ADD Count </button>
            </div>
            <div className="decrement-count">
                <p> Decrement count : {this.state.decrementCount} </p>
                <button onClick={this.decrement}>decrement Count </button>
            </div>
            <div className="multiplication-item">
                <p> Multiply Value : {this.state.multiplicationData}</p>
                <button onClick= {this.multiplyBy5}>Multiply * 5 </button>
            </div>
        </div>
    }
}