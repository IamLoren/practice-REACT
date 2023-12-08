import React, { Component } from 'react'
import { Products } from './components/Products/Products.jsx'
import { fetchProduct } from './components/Services/api.js'
import { LoadMoreBtn } from './components/LoadMoreBtn/LoadMoreBtn.jsx'
import { Loader } from './components/Loader/Loader.jsx'
import { Modal } from './components/Modal/Modal.jsx'
import { Header } from './components/Header/Header.jsx'

//Plan
// 1. Роздивитись апі 'https://dummyjson.com/products'
// 2. Створити компоненти для відображення розмітки( мінімальні параметри)
//      --- Компонент Products
//      --- Компонент Card
// 3. Створити папку services і файл api.js
//      --- Встановити axios
//      --- Створити baseUrl
//      --- Додати функцію для запиту
// 4. Створити стейт для даних
//      --- Додати products, loading, error, skip, limit
// 5. Виконати запит за даними
//      --- Додати componentDidMount
// 6. Додати кнопку load more і реалізувати її логіку
//      --- Додати функцію для зміни skip
//      --- Додати componentDidUpdate для реагування на skip
// 7. Додати корзину та логіку по додавання в корзину
//      --- Додати поле для корзини
//      --- Додати компонент для корзини
//      --- Додати функціх  для корзини (видалення додавання)
//      --- Перенести компонент в модалку
// 8. Додати можливість зберегти корзину в локал сторедж
// 9. Підрахунок вартості товарів в корзині
// 10. Заглушка якщо нема даних в корзині
// 11. Додати кнопку відкриття модалки в хедер

export class App extends Component {
	state = {
		productsData: [],
		skip: 0,
		loading: false,
		total: 0,
	}

	myRef = React.createRef()

	getSnapshotBeforeUpdate(prevProps, prevState) {
		if (prevState.productsData.length !== this.state.productsData.length) {
			const scrollPosition = this.myRef.current.offsetTop
			console.log(scrollPosition)
			return { scrollPosition }
		}
		return null
	}

	async componentDidMount() {
		const { products, total } = await fetchProduct({
			limit: 10,
		})
		this.setState({ productsData: products, total })
	}

	async componentDidUpdate(_, prevState, snapshot) {
		if (snapshot && prevState.productsData.length) {
			console.log(snapshot)
			const scrollPosition = this.myRef.current.offsetTop
			window.scrollTo({
				top: scrollPosition - 1000,
				behavior: 'smooth',
			})
		}
		if (prevState.skip !== this.state.skip) {
			try {
				this.setState({ loading: true })
				const { products } = await fetchProduct({
					limit: 10,
					skip: this.state.skip,
				})
				this.setState({
					productsData: [...prevState.productsData, ...products],
				})
			} catch (error) {
			} finally {
				this.setState({ loading: false })
			}
		}
	}

	handleLoadMore = () => {
		this.setState(prevState => ({ skip: prevState.skip + 10 }))
	}

	render() {
		return (
			<div>
				<Header />
				<Products products={this.state.productsData} />
				{this.state.total > this.state.productsData.length ? <LoadMoreBtn click={this.handleLoadMore} /> : null}

				<div style={{ visibility: 'hidden' }} ref={this.myRef}></div>
				{this.state.loading ? <Loader /> : null}
			</div>
		)
	}
}
