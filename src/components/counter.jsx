import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.detCountColor()}>{this.detCountContent()}</span>
        </div>
        <div className="col">
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => this.props.onIncrement(this.props.counter)}
          >
            +
          </button>
          <button
            className="btn btn-secondary btn-sm m-2"
            onClick={() => this.props.onDecrement(this.props.counter)}
            disabled={this.props.counter.value == 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            className="btn btn-warning btn-sm"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  detCountContent() {
    const { value: count } = this.props.counter;
    return count == 0 ? "Zero" : count;
  }

  detCountColor() {
    let def = "badge m-2 badge-";
    return this.props.counter.value == 0
      ? (def += "warning")
      : (def += "primary");
  }
}

export default Counter;
