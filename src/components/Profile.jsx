import { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      count: 1,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <>
        <h1>Profile with class component</h1>
        {this.state.count}
        <button
          className="border bg-black text-white"
          onClick={() => this.setState(() => this.state.count++)}
        >
          Count ++{" "}
        </button>
      </>
    );
  }
}

export default Profile;
