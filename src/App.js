import { Route, Routes } from 'react-router'
import { TaskList } from './components/TaskList/TaskList'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Header from './components/Header'
//Plan
// Додати форми логіну / регістрації
// Додати рефреш
// Додати заглушку при рефреш
// Додати приватні маршрути
const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/todos' element={<TaskList />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App
