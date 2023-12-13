import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyles } from './SharedUI/Global'
import { ContextProvider } from './Context/ContextProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './Context/CartProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<>
		<BrowserRouter>
			<ContextProvider>
				<CartProvider>
					<App />
				</CartProvider>
				<ToastContainer autoClose={1500} />
			</ContextProvider>
			<GlobalStyles />
		</BrowserRouter>
	</>
)
