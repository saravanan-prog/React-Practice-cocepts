import { Component } from "react";

export class LoopingExample extends Component {
  constructor() {
    super();
    this.state = {
      fruits: ["apple", "orange", "grapes", "pineapple"],
      countryList: ["India", "pakisthan", "china", "Brazil", "US"],
    };
  }

  render() {
    return (
      <div>
        <div className="fruilist">
          {this.state.fruits.length != 0 ? (
            this.state.fruits.map((value, index) => {
              return <p key={index}>{value}</p>;
            })
          ) : (
            <h3>Currently Fruits is Not available</h3>
          )}
        </div>
        <div className="contryList">
          <select>
            {this.state.countryList.length != 0 ? (
              this.state.countryList.map((value, index) => {
                return <option key={index} value={value}>{value}</option>;
              })
            ) : (
              <option>Not any country listed</option>
            )}
          </select>
        </div>
      </div>
    );
  }
}
