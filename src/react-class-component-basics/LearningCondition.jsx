import { Component } from "react";

export class LearningCondition extends Component {
  constructor() {
    super();
    this.state = {
        fruitAvailable:true,
        candidateListAvailable:true,
        canidateNameList : ["saravanan","Vinoth"],
        vegetableAvailable : true
    };
  }
  render() {
    return (
      <div>
        {/*Simple condition checking */}
        {this.state.fruitAvailable && (
          <ul>
            <li>apple</li>
            <li>Ornage</li>
          </ul>
        )}

        {this.state.candidateListAvailable && (
          <div>
            <p>{this.state.canidateNameList}</p>
          </div>
        )}
        {/* End */}

        {/* Ternary Operator */}

        {this.state.vegetableAvailable ? (
          <div>
            <p>Onion</p>
            <p>Potatoo</p>
            <p>Bringal</p>
          </div>
        ) : (
          <h3>Vegatable is currently not available</h3>
        )}
      </div>
    );
  }
}
