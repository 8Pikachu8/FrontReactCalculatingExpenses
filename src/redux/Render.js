import React from 'react'
import ReactDOM from 'react-dom/client'
import './../index.css'
import App from './../App.js'
import {
	addProduct,
	UpdateProduct,
	UpdatePrice,
	UpdateDate,
    UpdateCount,
    UpdateShop,
    UpdateType} from './State.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
const functions = [
	UpdateProduct,
	UpdatePrice,
	UpdateDate,
	UpdateCount,
	UpdateShop,
	UpdateType
]
export let rerenderApp = (state) => {
    
	root.render(
		<React.StrictMode>
			<App state={state} addProduct={addProduct} UpdateFunct = {functions}/>
		</React.StrictMode>
	)
}
