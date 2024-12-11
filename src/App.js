import AppCSS from './App.module.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Statistics from './components/ContentMain/StatisticsFolder/Statistics';
import ListProducts from './components/ContentMain/ListProductsFolder/ListProducts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UpdateProducts from './components/ContentMain/UpdateProductsFolder/UpdateProducts';


const App = (props) => {
  return (
		<BrowserRouter>
			<div className={AppCSS.appWrapper}>
				<Header />
				<Nav />
				<Routes>
					<Route path='/staticstics' element={<Statistics />} />
					<Route
						path='/listProducts/:id'
						element={
							<ListProducts ProductListPage={props.store.GetState()} />
						}
					/>
					<Route
						path='/listProducts/'
						element={
							<ListProducts ProductListPage={props.store.GetState()} />
						}
					/>
					<Route
						path='/updateProducts'
						element={
							<UpdateProducts
								store = {props.store}
							/>
						}
					/>
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	)
}


export default App;
