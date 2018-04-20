import React, { Component } from "react";
import { Counter } from "./Counter";
import { incrementAsync, decrement, increment } from "./actions";

import { connect } from "react-redux";

class App extends Component {
  render() {
    const { onIncrement, onDecrement, onIncrementAsync, state } = this.props;

    return (
      <div className="App">
        <Counter
          value={state}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onIncrementAsync={onIncrementAsync}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = {
  onIncrement: () => increment(),
  onDecrement: () => decrement(),
  onIncrementAsync: () => incrementAsync()
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
