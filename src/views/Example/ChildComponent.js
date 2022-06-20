import React from "react";

class ChildComponent extends React.Component {
  render() {
    console.log(">>>Render", this.state);
    return (
      <>
        <div>This is {this.props.name}</div>
      </>
    );
  }
}

export default ChildComponent;
