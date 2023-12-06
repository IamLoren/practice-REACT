import React from "react";

export class Form extends React.Component {
  state = {
    name: "",
    salary: "",
    position: "",
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleChangeSelect = ({ target }) => {
    this.setState({ position: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddUser(this.state);
    this.setState({
      name: "",
      salary: "",
      position: "",
    });
    console.log(this.state);
  };

  render() {
    const { name, salary } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          value={name}
          onChange={this.handleChange}
          placeholder="Enter name"
        ></input>
        <input
          name="salary"
          value={salary}
          onChange={this.handleChange}
          placeholder="Enter salary"
        ></input>
        <select onChange={this.handleChangeSelect}>
          {this.props.positions.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>
        <button>Add User</button>
      </form>
    );
  }
}
