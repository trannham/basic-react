import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
  //key: value
  state = {
    firstName: "",
    lastName: "",
  };

  // JSX -> return only 1 block
  // <React.Fragment> or <>
  handleChangeFirstname = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleChangeLastname = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(">>> data input: ", this.state);
  };
  render() {
    console.log(">>>Render", this.state);
    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleChangeFirstname(event)}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleChangeLastname(event)}
          />
          <br />
          <br />
          <input
            type="submit"
            value="Submit"
            onClick={(event) => this.handleSubmit(event)}
          />
        </form>
        <ChildComponent name={"first child"} />
        <ChildComponent name={"second child"} />
        <ChildComponent name={"third child"} />
      </>
    );
  }
}

export default MyComponent;
