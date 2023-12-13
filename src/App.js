//Plan
// 1. Додати в проект BrowserRouter
// 2. Створити папку pages
// 3. Створити компонент Products та Cart в папці Pages. Перенести відповідний код туди
// 4. Створити Navbar, Layout
// 5. Додати маршрути та заглушку на 404. А також використати Navigate для редіректу
// ----------------------
// 6. Додати можливість відкрити окрему картку
// 7. Додати пошуковий рядок використати useSearchParams
// 8. Зробити lazy loading + suspense
// 9. Кнопка goBack має виконуватись за допомогою useRef та повертатись назад, зберігаючи пошук

import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import Products from './pages/products'
import Layout from './components/Layout'
import NotFound from './pages/NotFound'
import { Cart } from './pages/Cart/Cart'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='products' element={<Products />} />
				<Route path='cart' element={<Cart />} />
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}

export default App
