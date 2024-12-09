import AppCSS from './App.module.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Statistics from './components/ContentMain/StatisticsFolder/Statistics';
import ListProducts from './components/ContentMain/ListProductsFolder/ListProducts';


const App = () => {
  return (
		<div className={AppCSS.appWrapper}>
			<Header />
			<Nav />
			<ListProducts />
			<Footer />
		</div>
	)
}


export default App;
