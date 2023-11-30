import { BlogCard } from './components/BlogCard'
import { Header } from './components/Header'
import dataArticle from './assets/article.json'
function App() {
	return (
		<div>
			<BlogCard {...dataArticle} />
		</div>
	)
}

export default App
