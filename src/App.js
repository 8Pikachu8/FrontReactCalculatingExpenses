import { useState } from 'react';
import AppCSS from './App.module.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Statistics from './components/ContentMain/StatisticsFolder/Statistics';
import ListProducts from './components/ContentMain/ListProductsFolder/ListProducts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UpdateProducts from './components/ContentMain/UpdateProductsFolder/UpdateProducts';
import DailyTasks from './components/ContentMain/DailyTasks/DailyTasks';
import ConteinerUP from './components/ContentMain/UpdateProductsFolder/ConteinerUP';
import ConteinerDT from './components/ContentMain/DailyTasks/ConteinerDT';
import ConteinerLP from './components/ContentMain/ListProductsFolder/ConteinerLP';


const App = () => {
	const [isNavVisible, setIsNavVisible] = useState(true); // Состояние для видимости навигации

  // Функция для переключения видимости
  const toggleNavVisibility = () => {
    setIsNavVisible(prevState => !prevState);
  };

  return (
		<BrowserRouter>
			<div className={AppCSS.appWrapper + ' ' + `${!isNavVisible ? AppCSS.navHidden : ''}`}>
				
        		<Nav toggleNavVisibility={toggleNavVisibility}  className = {`${!isNavVisible ? AppCSS.navHidden : ''}`} isVisible={isNavVisible} />
				
				<Header toggleNavVisibility={toggleNavVisibility} />
				<Routes>
					<Route path='/staticstics' element={<Statistics />} />
					<Route
						path='/listProducts/:id'
						element={
							<ConteinerLP />
						}
					/>
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
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	)
}


export default App;
