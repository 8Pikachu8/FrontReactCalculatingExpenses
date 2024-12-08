import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Statistics from './components/StatisticsFolder/Statistics';

const App = () => {
  return (
		<div className='app-wrapper'>
				<Header/>
				<Nav/>
				<Statistics/>
				<Footer/>

			
		</div>
	)
}


export default App;
