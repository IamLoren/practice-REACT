//Plan
// - Додати в проект BrowserRouter -[x]
// - Створити папку pages -[x]
// - Створити компонент Products та Cart в папці Pages. Перенести відповідний код туди -[x]
// - Створити Navbar, Layout -[x]
// - Додати маршрути та заглушку на 404. А також використати Navigate для редіректу -[x]
// ----------------------
// - Додати можливість відкрити окрему картку -[x]
// - Додати пошуковий рядок використати useSearchParams -[x]
// - Кнопка goBack має виконуватись за допомогою useRef та повертатись назад, зберігаючи пошук -[x]
// -----------------------
// - Зробити lazy loading + suspense
// - Пофіксити відображення даних, додати очистку при кожному запиті
// - Додати ліміт для запиту і зміну ліміта через select
// - Додати роут реєстрації, використати бібліотеку react-hook-form
// - Зробити базову валідацію для полів і вивести помилки
// - Вивести нотіфікацію, що товар додали в корзину
// - Зробити лічильник товарів в корзині + та - . Переробити логіку підрахунку в корзину та додавання в елемента в корзину

import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import Products from './pages/products'
import Layout from './components/Layout'
import NotFound from './pages/NotFound'
import { Cart } from './pages/Cart/Cart'
import ProductDetails from './pages/ProductDetails'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='products' element={<Products />} />
				<Route path='products/:productId' element={<ProductDetails />} />
				<Route path='cart' element={<Cart />} />
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}

export default App
