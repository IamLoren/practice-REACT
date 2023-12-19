import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyles } from './SharedUI/Global'
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<>
		<Provider store={store}>
			<App />
			<GlobalStyles />
		</Provider>
	</>
)
