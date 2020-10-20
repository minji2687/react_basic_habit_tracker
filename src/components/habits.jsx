import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  handleReset = () => {
    this.props.onReset();
  };

  render() {
    console.log("habits");
    return (
      <>
        <ul>
          {this.props.habits.map((habit) => {
            return (
              <Habit
                key={habit.id}
                habit={habit}
                onIncrement={this.props.onIncrement}
                onDecrement={this.props.onDecrement}
                onDelete={this.props.onDelete}
              />
            );
          })}
        </ul>
        <button className="habits-reset" onClick={this.handleReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
