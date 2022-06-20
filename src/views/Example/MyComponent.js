import React from "react";

class MyComponent extends React.Component {
  //key: value
  state = {
    name: "Tran",
    status: "unemployment",
  };

  // JSX -> return only 1 block
  // <React.Fragment> or <>
  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <>
        <div className="first">
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeName(event)}
          />
          Hello from my component, my name is {this.state.name} or{" "}
          {this.state["name"]}.
        </div>
        <div className="second">My status is {this.state.status}.</div>
      </>
    );
  }
}

export default MyComponent;
