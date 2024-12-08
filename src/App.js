import AppCSS from './App.module.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Statistics from './components/StatisticsFolder/Statistics';

const App = () => {
  return (
		<div className={AppCSS.appWrapper}>
				<Header/>
				<Nav/>
				<Statistics/>
				<Footer/>

			
		</div>
	)
}


export default App;
