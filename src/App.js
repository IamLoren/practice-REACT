import React from "react";
import { Users } from "./components/Users/Users";
import { FilterUserPos } from "./components/FilterUserPos/FilterUserPos";
import { Counter } from "./components/Counter/Counter";

//Plan
// 1. Створити компонент для Users - [x] - Oleh
// 2. Створити компонент для SingleUser -[x] -Oleh
// 3. Створити стейт для Users - [x] -Oleh
// 4. Прокинути дані в компонент Users - [x] -Oleh
// 5. Зробити метод для видалення - [x] - Lana
// 6. Зробити метод для додавання - [x] - Mari
// 7. Зробити метод для перемикання стану (isWorking / onBench) - [x] - Olena
// 8. Додати фільтр по position  (dev, qa, hr)
// 			- створити компонент
// 			- створити поле в стейт, котре тримає тимчасове значення
// 			- створити функцію для зміни цього поля
//		    - передати функцію в компонент фільтра
//          - створити функцію для фільтрації
//          - передати результат виконання пропсами
// 9. Додати підрахунок  users котрі в роботі
// 10. Переписати на форму додавання та винести в окремий компонент
// 11. Зробити можливість додати користувачів до улюблених)
export class App extends React.Component {
  state = {
    users: [
      { name: "Alex", salary: 6000, id: 1, position: "dev", status: "onBench" },
      { name: "Kira", salary: 6500, id: 2, position: "qa", status: "onBench" },
      { name: "Irka", salary: 7500, id: 3, position: "hr", status: "onWork" },
    ],
    positions: ["dev", "qa", "hr", "ceo", "cto"],
    name: "",
    salary: "",
    position: "",
    filterPosition: "all",
  };

  getFilterData = () => {
    if (this.state.filterPosition === "all") return this.state.users;
    return this.state.users.filter(
      (item) => item.position === this.state.filterPosition
    );
  };

  handleChangeFilter = (filterValue) => {
    this.setState({ filterPosition: filterValue });
  };

  handleChangeSelect = ({ target }) => {
    this.setState({ position: target.value });
  };
  handleDellUser = (id) => {
    this.setState((prevState) => ({
      users: prevState.users.filter((user) => user.id !== id),
    }));
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleAddUser = () => {
    if (!this.state.name || !this.state.salary) {
      return;
    }

    this.setState((prevState) => ({
      users: [
        ...prevState.users,
        {
          id: crypto.randomUUID(),
          name: prevState.name,
          salary: prevState.salary,
          position: prevState.position,
          status: "onBench",
        },
      ],
      name: "",
      salary: "",
    }));
  };

  getCurrentWorkers = () => {
    return this.state.users.reduce(
      (acc, user) => (user.status === "onWork" ? acc + 1 : acc),
      0
    );
  };

  handleChangeStatus = (id) => {
    const newArr = this.state.users.map((user) =>
      user.id === id
        ? { ...user, status: user.status === "onBench" ? "onWork" : "onBench" }
        : user
    );
    this.setState({ users: newArr });
  };

  render() {
    const workers = this.getCurrentWorkers();
    const usersFiltered = this.getFilterData();
    const { users, name, salary, positions } = this.state;
    return (
      <div>
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
          {positions.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>
        <button onClick={this.handleAddUser}>Add User</button>
        <FilterUserPos
          handleChangeFilter={this.handleChangeFilter}
          btnsArrayPosition={this.state.positions}
        />
        <Counter countOfWorkers={workers} />
        <Users
          usersInfo={usersFiltered}
          delUser={this.handleDellUser}
          handleChangeStatus={this.handleChangeStatus}
        />
      </div>
    );
  }
}
