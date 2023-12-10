import React, { Component } from 'react'
import { Products } from './components/Products/Products.jsx'
import { fetchProduct } from './components/Services/api.js'
import { LoadMoreBtn } from './components/LoadMoreBtn/LoadMoreBtn.jsx'
import { Loader } from './components/Loader/Loader.jsx'
import { Header } from './components/Header/Header.jsx'

//Plan
// 1. Refactoring to hooks
// 2. Використати useState()
// 3. Використати useEffect()
// 4. Використати useRef()

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
