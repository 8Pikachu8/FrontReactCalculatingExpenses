import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.js'
import store from './redux/NewStore.js'

const root = ReactDOM.createRoot(document.getElementById('root'))

export let rerenderApp = () => {
	root.render(
		<React.StrictMode>
			<App store = {store} dispatch = {store.dispatch.bind(store)} />
		</React.StrictMode>
	)
}

rerenderApp()
store.subscribe(rerenderApp)
