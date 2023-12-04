// Приклад даних - [{ id: '1', title: 'React is so cool', completed: false },{ id: '2', title: 'JS', completed: true }]
//Plan
// 1. Створити компонент для Users - [] - Oleh
// 2. Створити компонент для SingleUser -[] -Oleh
// 3. Створити стейт для Users - [] -Oleh
// 4. Прокинути дані в компонент Users - [] -Oleh
// 5. Зробити метод для видалення
// 6. Зробити метод для додавання
// 7. Зробити метод для перемикання стану (active / completed)
// 8. Додати фільтр по стану  (all, active, completed)
// 9. Додати підрахунок активних users
import React from "react";
import { Users } from "./components/Users/Users";

export class App extends React.Component {
  state = {
    users: [
      { name: "Alex", salary: 6000, id: 1 },
      { name: "Kira", salary: 6500, id: 2 },
      { name: "Irka", salary: 7500, id: 3 },
    ],
  };
  render() {
    const { users } = this.state;
    return (
      <div>
        <Users usersInfo={users} />
      </div>
    );
  }
}

// function App() {

// }

// export default App;
