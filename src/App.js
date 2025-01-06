import { useState } from 'react';
import AppCSS from './App.module.css';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav';
import Statistics from './components/ContentMain/StatisticsFolder/Statistics';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ConteinerUP from './components/ContentMain/UpdateProductsFolder/ConteinerUP';
import ConteinerDT from './components/ContentMain/DailyTasks/ConteinerDT';
import ConteinerLP from './components/ContentMain/ListProductsFolder/ConteinerLP';
import UsersConteiner from './components/ContentMain/Users/UsersConteiner';
import ProfileConteiner from './components/ContentMain/Profile/ProfileConteiner';
import HeaderConteiner from './components/Header/HeaderConteiner';
import AuthConteiner from './components/ContentMain/Auth/AuthConteiner';


const App = () => {
	const [isNavVisible, setIsNavVisible] = useState(true); // Состояние для видимости навигации


  return (
		<BrowserRouter>
			<div className={AppCSS.appWrapper + ' ' + `${!isNavVisible ? AppCSS.navHidden : ''}`}>
				
        		<Nav className = { AppCSS.navHidden }  />
				
				<HeaderConteiner />
				<Routes>
					<Route path='/staticstics' element={<Statistics />} />
					
					<Route
						path='/listProducts/'
						element={
							<ConteinerLP />
						}
					/>
					<Route
						path='/updateProducts'
						element={
							<ConteinerUP />
						}
					/>
					<Route path='/dailyTasks' 
						element={
							<ConteinerDT />
						} />
					<Route path='/users' 
						element={
							<UsersConteiner />
						} />

					<Route path='/profile/:id?' 
						element={
							<ProfileConteiner />
						} />
					<Route path='/auth' 
						element={
							<AuthConteiner />
						} />
					
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	)
}


export default App;
