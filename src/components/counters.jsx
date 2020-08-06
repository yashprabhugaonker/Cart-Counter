import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <React.Fragment>
        <button className="btn btn-primary m-3" onClick={this.props.onAdd}>
          Add
        </button>
        <button className="btn btn-primary m-3" onClick={this.props.onReset}>
          Reset
        </button>
        {this.props.counters.map((e) => (
          <div>
            <Counter
              key={e.id}
              counter={e}
              onDelete={this.props.onDelete}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
            />
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
