import { Header } from './components/Header'
import dataArticle from './assets/article.json'
import { Statistics } from './components/Statistics'
import dataStats from './assets/data.json'
import { BlogCardStyled } from './components/BlogCard/BlogCardStyled'
import { GlobalStyles } from './SharedUI/Global'

function App() {
	return (
		<div>
			<Header title='Project-js' />
			<BlogCardStyled {...dataArticle} />
			<Statistics data={dataStats} />
		</div>
	)
}

export default App
