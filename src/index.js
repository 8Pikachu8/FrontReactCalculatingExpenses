import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.js'
import prodlist from './redux/ProductList.js'

const root = ReactDOM.createRoot(document.getElementById('root'))

export let rerenderApp = () => {
    
	root.render(
		<React.StrictMode>
			<App store = {prodlist} />
		</React.StrictMode>
	)
}

rerenderApp(prodlist.GetState())
prodlist.SetSubscribe(rerenderApp)
