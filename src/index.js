import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.js'
import store from './redux/NewStore.js'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))

export let rerenderApp = () => {
	root.render(
		<React.StrictMode>
			<Provider store={store}>
			<App />
			</Provider>
		</React.StrictMode>
	)
}

rerenderApp()
store.subscribe(rerenderApp)
