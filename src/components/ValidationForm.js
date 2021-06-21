import React from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  nameErr: "",
  emailErr: "",
  passwordErr: "",
};

export default class ValidationForm extends React.Component {
  state = initialState;

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let nameErr = "";
    let emailErr = "";
    // let passwordErr = "";

    if (!this.state.name) {
      nameErr = "name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailErr = "invalid email";
    }
    if (emailErr || nameErr) {
      this.setState({ emailErr, nameErr });
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div style={{ color: "red", fontSize: 13 }}>{this.state.nameErr}</div>
        </div>
        <div>
          <input
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div style={{ color: "red", fontSize: 13 }}>
            {this.state.emailErr}
          </div>
        </div>
        <div>
          <input
            name="password"
            placeholder="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div style={{ color: "red", fontSize: 13 }}>
            {this.state.passwordErr}
          </div>
        </div>
        <button type="submit">submit</button>
      </form>
    );
  }
}
