import React from "react";
import { Users } from "./components/Users/Users";
import { FilterUserPos } from "./components/FilterUserPos/FilterUserPos";
import { Counter } from "./components/Counter/Counter";
import { Form } from "./components/Form/Form";

//Plan
// 1. Створити компонент для Users - [x] - Oleh
// 2. Створити компонент для SingleUser -[x] -Oleh
// 3. Створити стейт для Users - [x] -Oleh
// 4. Прокинути дані в компонент Users - [x] -Oleh
// 5. Зробити метод для видалення - [x] - Lana
// 6. Зробити метод для додавання - [x] - Mari
// 7. Зробити метод для перемикання стану (isWorking / onBench) - [x] - Olena
// 8. Додати фільтр по position  (dev, qa, hr) - [x] - Mari
// 			- створити компонент
// 			- створити поле в стейт, котре тримає тимчасове значення
// 			- створити функцію для зміни цього поля
//		    - передати функцію в компонент фільтра
//          - створити функцію для фільтрації
//          - передати результат виконання пропсами
// 9. Додати підрахунок  users котрі в роботі - [x] - Andrii
// 10. Переписати на форму додавання та винести в окремий компонент
//          - Створити компонент форму
//          - Передати пропсами потрібні функції
//          - Винести стейт в компонент форму
//          - Зробити очистку стейту при створенні юзера
// 11. Додати збереження в localStorage
//          - Використати componentDidUpdate для загрузки в LS
//          - Використати componentDidMount для загрузки з LS
// 12. Додати модальне вікно з логікою
//          - Створити компонент модалки
//          - Додати поле в стейт для стану модалки
//          - Створити метод по відкриттю / закриттю модалки
//          - Дати можливість як відкрити так і закрити модалку
//          - Повісити закриття на Еscape
//          - Опрацювати клік по бекдропу
//          - Створити стейт для одного юзера, при кліку по юзеру записує в 'content'
//          - Передати в модалку дані для конкретного юзера

export class App extends React.Component {
  state = {
    users: [
      { name: "Alex", salary: 6000, id: 1, position: "dev", status: "onBench" },
      { name: "Kira", salary: 6500, id: 2, position: "qa", status: "onBench" },
      { name: "Irka", salary: 7500, id: 3, position: "hr", status: "onWork" },
    ],
    positions: ["dev", "qa", "hr", "ceo", "cto"],
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

  handleDellUser = (id) => {
    this.setState((prevState) => ({
      users: prevState.users.filter((user) => user.id !== id),
    }));
  };

  handleAddUser = (data) => {
    console.log(data);
    if (!data.name || !data.salary) {
      return;
    }

    this.setState((prevState) => ({
      users: [
        ...prevState.users,
        {
          id: crypto.randomUUID(),
          name: data.name,
          salary: data.salary,
          position: data.position,
          status: "onBench",
        },
      ],
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
    const { positions } = this.state;
    return (
      <div>
        <Form handleAddUser={this.handleAddUser} positions={positions} />
        <FilterUserPos
          handleChangeFilter={this.handleChangeFilter}
          btnsArrayPosition={positions}
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
