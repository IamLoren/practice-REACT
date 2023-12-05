import React from 'react'
import { Users } from './components/Users/Users'

//Plan
// 1. Створити компонент для Users - [x] - Oleh
// 2. Створити компонент для SingleUser -[x] -Oleh
// 3. Створити стейт для Users - [x] -Oleh
// 4. Прокинути дані в компонент Users - [x] -Oleh
// 5. Зробити метод для видалення - [x] - Lana
// 6. Зробити метод для додавання - [x] - Mari
// 7. Зробити метод для перемикання стану (isWorking / onBench) - [x] - Olena
// 8. Додати фільтр по position  (dev, qa, hr)
// 9. Додати підрахунок  users котрі в роботі
// 10. Переписати на форму додавання та винести в окремий компонент
// 11. Зробити можливість додати користувачів до улюблених)
export class App extends React.Component {
	state = {
		users: [
			{ name: 'Alex', salary: 6000, id: 1, position: 'dev' },
			{ name: 'Kira', salary: 6500, id: 2, position: 'qa' },
			{ name: 'Irka', salary: 7500, id: 3, position: 'hr' },
		],
		positions: ['dev', 'qa', 'hr'],
		name: '',
		salary: '',
		position: '',
	}

	handleChangeSelect = ({ target }) => {
		this.setState({ position: target.value })
	}
	handleDellUser = id => {
		this.setState(prevState => ({
			users: prevState.users.filter(user => user.id !== id),
		}))
	}

	handleChange = ({ target }) => {
		const { name, value } = target
		this.setState({ [name]: value })
	}

	handleAddUser = () => {
		if (!this.state.name || !this.state.salary) {
			return
		}

		this.setState(prevState => ({
			users: [
				...prevState.users,
				{
					id: crypto.randomUUID(),
					name: prevState.name,
					salary: prevState.salary,
					position: prevState.position,
				},
			],
			name: '',
			salary: '',
		}))
	}

	render() {
		const { users, name, salary, positions } = this.state
		return (
			<div>
				<input name='name' value={name} onChange={this.handleChange} placeholder='Enter name'></input>
				<input name='salary' value={salary} onChange={this.handleChange} placeholder='Enter salary'></input>
				<select onChange={this.handleChangeSelect}>
					{positions.map(el => (
						<option key={el} value={el}>
							{el}
						</option>
					))}
				</select>
				<button onClick={this.handleAddUser}>Add User</button>
				<Users usersInfo={users} delUser={this.handleDellUser} />
			</div>
		)
	}
}
