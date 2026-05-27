import React from "react";

class LifeCycle extends React.Component {
  componentDidMount() {
    console.log("Mounted");
  }

  componentDidUpdate() {
    console.log("Updated");
  }

  componentWillUnmount() {
    console.log("Unmounted");
  }

  render() {
    return <h2>Lifecycle Component</h2>;
  }
}

export default LifeCycle;
