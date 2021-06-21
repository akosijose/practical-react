import React from "react";

export default class Myform extends React.Component {
  state = {
    name: "",
    email: "",
    password: true,
    title: "Mr.",
  };

  handleChange = (event) => {
    console.log(event.target.name);
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          type="text"
        />
        <textarea
          name="favoritePet"
          value={this.state.favoritePet}
          onChange={this.handleChange}
        />
        <input
          name="rememberMe"
          type="checkbox"
          checked={this.state.rememberMe}
          onChange={this.handleChange}
        />
        <div>
          <select
            name="title"
            value={this.state.title}
            onChange={(e) => {
              this.handleChange(e, "title");
            }}
          >
            <option>Mr.</option>
            <option>Miss.</option>
            <option>Ms.</option>
            <option>Mrs.</option>
          </select>
        </div>
        <button type="submit">submit</button>
      </form>
    );
  }
}
