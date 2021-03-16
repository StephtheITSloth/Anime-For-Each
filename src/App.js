import React from 'react'
import './App.css';
import {Route, Link} from 'react-router-dom'
import About from './components/About/About'
import Animes from './components/Animes/Animes'
import Anime from './components/Anime/Anime'
import SearchResult from './components/Searchfield/SearchResult'

function App() {


  return (
		<div className='App'>
			<nav>
				<Link to='/'>
					<h1 className='h1'>Anime For Each</h1>
				</Link>
				<ul className='nav'>
					<li>
						<Link to='/about'>About...</Link>
					</li>
					<li>
						<Link to='/animes'>Animes...</Link>
					</li>

					<li>
						<Link to='/search'>Search...</Link>
					</li>
				</ul>
			</nav>
			<main>
				<Route path='/' />

				<Route path='/search' component={SearchResult} />

				<Route path='/about' exact component={About} />

				<Route path='/animes' exact component={Animes} />

				<Route path='/animes/:anime' component={Anime} />
			</main>
		</div>
	);
}

export default App;
//I need a title for my app

//I need a navigation bar
  //I need a logo link in the nav bar
  //I need an anime link
  //I need a search bar with option(extra)

//I need a logo component.
  //the about of the app

//The anime component takes me to a list of anime