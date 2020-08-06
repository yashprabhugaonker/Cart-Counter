import React, { Component } from "react";

import Counters from "./components/counters";
import Navbar from "./components/navbar";

import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (cid) => {
    const counters = this.state.counters.filter((counter) => counter.id != cid);
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counter[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counter[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };
  handleAdd = () => {
    const { counters } = this.state;
    const counter = { id: counters.length + 1, value: 0 };
    const newCounters = [counter, ...counters];
    this.setState({ counters: newCounters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          dispCount={
            this.state.counters.filter((counter) => counter.value != 0).length
          }
        />
        <Counters
          counters={this.state.counters}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onReset={this.handleReset}
          onAdd={this.handleAdd}
        />
      </React.Fragment>
    );
  }
}

export default App;
