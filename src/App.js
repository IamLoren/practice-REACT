import { Posts } from './components/Posts/Posts'
import { TaskList } from './components/TaskList/TaskList'
//Plan
// Підключити роутер до проекту (notFound, layout, index)
// Конфігурувати аксіос, використати create
// Створити слайс для auth і додати файл операцій
// Додати можливість реєстрації та логінізації
// Додати можливість для виходу з облікового запису
const App = () => {
	return (
		<div>
			<TaskList />
		</div>
	)
}

export default App
